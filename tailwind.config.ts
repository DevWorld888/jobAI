import { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            
            keyframes: {
              shake: {
                "0%, 100%": { transform: "translateX(0)" },
                "25%": { transform: "translateX(-2px)" },
                "50%": { transform: "translateX(2px)" },
                "75%": { transform: "translateX(-2px)" },
              },
            },
            animation: {
              "shake-animation": "shake 0.3s ease-in-out infinite",
            },
          },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require('tailwindcss-motion')], 
};

export default config;