<img src="https://www.nodebench.com/_next/image?url=%2Fimages%2Flogo.png&w=384&q=75" alt="drawing" width="100"/>

# nodebench.com

> Hardware reviews and technical articles for Indian audiences. Still in development.


## Live Website
Here is a main webapp:  https://nodebench.com/


## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/prokits/nodebench-site.git
   cd nodebench-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Update the following variables in `.env.local`:
     ```
     TURSO_DB_URL=           # Your Turso database URL
     TURSO_DB_AUTH_TOKEN=    # Your Turso auth token
     TURNSTILE_SITE_KEY=     # Cloudflare Turnstile site key
     TURNSTILE_SECRET_KEY=   # Cloudflare Turnstile secret key
     POSTHOG_KEY=            # PostHog project API key
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The app will use Turbopack in development for faster refresh times. Any changes you make to the files will be reflected immediately in the browser.

### Development
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 

### Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/prokits/nodebench-site/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/prokits/nodebench-site/issues/new). Please include sample queries and their corresponding results.


### Tech Stack

- [Next.js](https://nextjs.org/) - Frontend in React.js and serverless backend.
- [Turso](https://turso.tech/) - Edge SQLite database for storing benchmark data (yet to be implemented).
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM for database operations.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [MDX](https://mdxjs.com/) - Markdown with JSX for writing articles.
- [Shadcn & Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components.
- [React Hook Form](https://react-hook-form.com/) - Form validation and handling.
- [Zod](https://zod.dev/) - TypeScript-first schema validation.
- [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) - Bot protection.
- [PostHog](https://posthog.com/) - Product analytics.



### Additional Scripts
- `npm run new-article` - Create a new article template with metadata and frontmatter.

