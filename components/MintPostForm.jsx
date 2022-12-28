import React, { useState } from 'react';
import web3 from '../web3';
import blogSpotContract from '../contracts/BlogSpot';

const MintPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [fee, setFee] = useState(0);
  const [royalties, setRoyalties] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleMintPost = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];
      await blogSpotContract.methods.mintPost(title, content, fee, royalties).send({ from: userAddress });
      setSuccess('Post minted successfully');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleMintPost}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Content:
        <textarea value={content} onChange={(event) => setContent(event.target.value)} />
      </label>
      <br />
      <label>
        Fee:
        <input type="number" value={fee} onChange={(event) => setFee(event.target.value)} />
      </label>
      <br />
      <label>
        Royalties:
        <input type="number" value={royalties} onChange={(event) => setRoyalties(event.target.value)} />
      </label>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <button type="submit" disabled={loading}>
        Mint Post
      </button>
    </form>
  );
};

export default MintPostForm;
