export function Projects() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 160px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '80%',
        }}
      >
        <h1 style={{ fontSize: '24px', margin: '0' }}>
          🚧 Página em desenvolvimento! Volte mais tarde. 🤠
        </h1>

        <iframe
          src="https://giphy.com/embed/zOvBKUUEERdNm"
          width="100%"
          height="50%"
          frameBorder="0"
          allowFullScreen
          title="GIF"
          style={{ maxWidth: '400px', width: '100%' }}
        ></iframe>
      </div>
    </div>
  )
}
