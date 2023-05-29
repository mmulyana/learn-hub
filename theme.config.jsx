const config = {
  logo: <span>Learn Hub</span>,
  project: {
    link: 'https://github.com/mmulyana/learn-hub',
  },
  docsRepositoryBase: 'https://github.com/mmulyana/learn-hub',
  footer: {
    text: 'Learn hub by Mulyana built with Nextra',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Learn Hub ',
    }
  },
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='Learn Hub by Mulyana' />
      <meta
        property='og:description'
        content='Learn Hub personal documentation by Mulyana'
      />
    </>
  ),
}

export default config
