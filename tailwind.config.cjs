/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  colors: {
	    'gray': {
	      'light': '#edefee',
	      'dark': '#41403c'
	    },
	    'orange': '#d08856',
	    'red': '#aa210f',
	  },
	  fontFamily: {
	    'sans': ['Lato'],
	    'serif': ['"Libre Baskerville"'],
	    'mono': ['"IBM Plex Mono"']
	  },
		extend: {
		  typography: theme => ({
		    DEFAULT: {
		      css: {

            '--tw-prose-headings': theme('colors.gray.dark'),
            '--tw-prose-td-borders': theme('colors.gray.light'),
            '--astro-code-color-text': theme('colors.gray.dark'),
            '--astro-code-color-background': '#edefee80',
            '--astro-code-token-comment': '#568c3e',
            '--astro-code-token-keyword': '#3e568c',
            '--astro-code-token-constant': theme('colors.gray.dark'),
            '--astro-code-token-string-expression': '#bd5533',
            '--astro-code-token-punctuation': theme('colors.gray.dark'),
            '--astro-code-token-function': theme('colors.orange'),

            h1: {
              fontSize: '3rem',
              lineHeight: '1',
              fontFamily: theme('fontFamily.sans')
            },
            h2: {
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              fontFamily: theme('fontFamily.sans')   
            },
            h3: {
              fontSize: '1.5rem',
              lineHeight: '2rem',
              fontFamily: theme('fontFamily.sans')
            },
            h4: {
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              fontFamily: theme('fontFamily.sans')
            },
            'ol, ul, p': {
              fontSize: '1.25rem',
              lineheight: '1.75rem',
              fontFamily: theme('fontFamily.serif')
            },
            'li::marker': {
              color: theme('colors.gray.dark')
            },
            a: {
              textDecorationLine: 'underline',
              textUnderlineOffset: '4px',
              textDecorationThickness: 'auto',
              '&:hover': {
                textUnderlineOffset: '8px',
                textDecorationThickness: '2px'
              }
            },
            pre: {
              fontWeight: '500'
            },
            code: {
              // backgroundColor: theme('colors.gray.light'),
              color: theme('colors.gray.dark'),
              fontFamily: theme('fontFamily.mono'),
              fontWeight: '500',
              fontSize: 'inherit'
            },
            'code::before': {
              content: 'none'
            },
            'code::after': {
              content: 'none',
            }
          }
        }    
      })
    },
  },
	plugins: [require('@tailwindcss/typography'),],
}
