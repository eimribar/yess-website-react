'use client';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
  const fullUrl = `https://www.yess.ai${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || '');

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };

  return (
    <div className="social-share-container">
      <div className="social-share-label">Share this article:</div>
      <div className="social-share-buttons">
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-share-button linkedin"
          aria-label="Share on LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4.5 3C3.67 3 3 3.67 3 4.5v11c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-11zM6 7h2v6H6V7zm1-1.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM14 13h-2v-2.5c0-.83-.67-1.5-1.5-1.5S9 9.67 9 10.5V13H7V7h2v1c.5-.5 1.2-.8 2-.8 1.66 0 3 1.34 3 3v2.8z"/>
          </svg>
          LinkedIn
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="social-share-button twitter"
          aria-label="Share on Twitter"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Twitter
        </a>
        <a
          href={shareLinks.email}
          className="social-share-button email"
          aria-label="Share via Email"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.5 5.5c0-.83.67-1.5 1.5-1.5h12c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H4c-.83 0-1.5-.67-1.5-1.5v-9zm1.5-.5v.55l6 3.75 6-3.75V5H4zm0 2.45v7.05h12V7.45l-6 3.75-6-3.75z"/>
          </svg>
          Email
        </a>
      </div>
    </div>
  );
}
