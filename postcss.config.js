module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'wpriverthemes.com',
            port: '',
            pathname: '/HTML/uniiq/assets/images'
        }
    ]
  }
};
