// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract CovenProfile is ERC721URIStorage, Pausable, Ownable {

    constructor()ERC721("Coven", "COV"){

    }

  uint256 COUNTER;

  struct Coven {
    uint256 id;
    string handle;
    string imageURI;
    uint createdAt;
  }

  Coven[] public covens;

  event NewCoven(address indexed owner, uint256 id, string handle, string imageURI, uint createdAt);

  // Creation
  function _createCoven(string memory _handle, string memory imageURI, string memory tokenURI) internal {
      uint createdAt = block.timestamp;
    Coven memory newCoven = Coven(COUNTER, _handle, imageURI, createdAt);
    covens.push(newCoven);
    _safeMint(msg.sender, COUNTER);
    _setTokenURI(COUNTER, tokenURI);
    emit NewCoven(msg.sender, COUNTER, _handle, imageURI, createdAt);
    COUNTER++;
  }

  function createCoven(string memory _handle, string memory imageURI, string memory tokenURI) public whenNotPaused {
    _createCoven(_handle, imageURI, tokenURI);
  }

  function rescue() external payable onlyOwner {
    address payable _owner = payable(owner());
    _owner.transfer(address(this).balance);
  }

  function _setProfileImageURI(uint256 id, string calldata imageURI) internal {
    require(msg.sender == ownerOf(id));
    covens[id].imageURI = imageURI;
  }

  function setProfileImageURI(uint256 id, string calldata imageURI) external whenNotPaused {
    _setProfileImageURI(id, imageURI);
  }


  function _setProfileHandle(uint256 id, string calldata handle) internal {
    require(msg.sender == ownerOf(id));
    covens[id].handle = handle;
  }

  function setProfileHandle(uint256 id, string calldata handle) external whenNotPaused {
    _setProfileHandle(id, handle);
  }

   function burn(uint256 tokenId) public whenNotPaused {
      require(msg.sender == ownerOf(tokenId));
        _burn(tokenId);
    }

  // Getters
  function getCovens() public view returns (Coven[] memory) {
    return covens;
  }

  function getOwnerCovens(address _owner) public view returns (Coven[] memory) {
    Coven[] memory result = new Coven[](balanceOf(_owner));
    uint256 counter = 0;
    for (uint256 i = 0; i < covens.length; i++) {
      if (ownerOf(i) == _owner) {
        result[counter] = covens[i];
        counter++;
      }
    }
    return result;
  }

  // Helpers

  function pause() public onlyOwner {
        _pause();
  }

  function unpause() public onlyOwner {
        _unpause();
  }
}