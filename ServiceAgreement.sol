// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Simple Service Agreement
/// @notice Provider publishes terms; designated customer signs; terms become locked.
contract ServiceAgreement {
    // --- Roles (fixed at deployment) ---
    address public immutable provider;   // contract owner / service provider
    address public immutable customer;   // counterparty allowed to sign

    // --- Terms (editable only before lock) ---
    string  private _termsURI;           // e.g., IPFS CID or HTTPS link to the terms text/PDF
    bytes32 public termsHash;            // keccak256 hash of the exact terms text (optional but recommended)

    // --- Lifecycle ---
    bool    public locked;               // becomes true after customer signs
    uint256 public signedAt;             // block timestamp when signed

    // --- Events ---
    event TermsUpdated(string termsURI, bytes32 termsHash);
    event Signed(address indexed customer, uint256 signedAt);
    event Locked(address indexed locker, uint256 lockedAt);

    // --- Errors ---
    error OnlyProvider();
    error OnlyCustomer();
    error AlreadyLocked();
    error EmptyTerms();

    constructor(address _customer, string memory initialURI, bytes32 initialHash) {
        if (_customer == address(0)) revert OnlyCustomer();
        if (bytes(initialURI).length == 0 && initialHash == bytes32(0)) revert EmptyTerms();

        provider = msg.sender;
        customer = _customer;
        _termsURI = initialURI;
        termsHash = initialHash;

        emit TermsUpdated(initialURI, initialHash);
    }

    // --- Modifiers ---
    modifier onlyProvider() {
        if (msg.sender != provider) revert OnlyProvider();
        _;
    }

    modifier onlyCustomer() {
        if (msg.sender != customer) revert OnlyCustomer();
        _;
    }

    modifier notLocked() {
        if (locked) revert AlreadyLocked();
        _;
    }

    /// @notice Update the terms before the customer signs.
    /// @dev Once signed, updates are blocked forever.
    function updateTerms(string calldata newURI, bytes32 newHash)
        external
        onlyProvider
        notLocked
    {
        if (bytes(newURI).length == 0 && newHash == bytes32(0)) revert EmptyTerms();
        _termsURI = newURI;
        termsHash = newHash;
        emit TermsUpdated(newURI, newHash);
    }

    /// @notice Customer accepts the current terms, permanently locking the contract.
    function sign() external onlyCustomer notLocked {
        signedAt = block.timestamp;
        locked = true;
        emit Signed(msg.sender, signedAt);
        emit Locked(msg.sender, signedAt);
    }

    /// @notice Public getter for the terms URI.
    function termsURI() external view returns (string memory) {
        return _termsURI;
    }
}
