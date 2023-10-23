const sites = [
  {
    id: 0,
    siteName: "naver",
    url: "https://naver.com",
  },
  {
    id: 1,
    siteName: "kakako",
    url: "https://kakao.com",
  },
  {
    id: 2,
    siteName: "google",
    url: "https://www.google.com",
  },
];

export const ViewSiteEx = () => {
  return (
    <div>
      <h2>즐겨찾기</h2>
      {sites.map((site) => (
        <h3 key={site.id}>
          <a href={site.url}>{site.siteName}</a>
        </h3>
      ))}
      <hr />
    </div>
  );
};
