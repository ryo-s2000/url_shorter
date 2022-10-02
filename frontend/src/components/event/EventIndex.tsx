import { useState } from 'react';
import axios from 'plugins/axios/config';

interface ShortUrl {
  url: string;
}

const generateShortUrl = async (originalUrl: string): Promise<string> => {
  const res = await axios.post('/url/shorten', {
    originalUrl: originalUrl
  });
  const result = (await res.data) as ShortUrl;
  return result.url;
};

const copyTextToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text)
  .then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

const IndexPage = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setEvents] = useState('');

  const clickShorten = async () => {
    const generatedShortUrl = await generateShortUrl(originalUrl);
    setEvents(generatedShortUrl);
  };

  return (
    <div>
      <div className='flex'>
        <div>
          <input value={originalUrl} onChange={(event) => setOriginalUrl(event.target.value)} />
        </div>

        <div>
          <button onClick={clickShorten}>Shorten</button>
        </div>
      </div>

      <div className='flex'>
        <div>
          <input value={shortUrl} onChange={()=>''} />
        </div>
        <div>
          <button onClick={() => copyTextToClipboard(shortUrl)}>
            URLをコピーする
          </button>
        </div>
      </div>

    </div>
  );
};

export default IndexPage;
