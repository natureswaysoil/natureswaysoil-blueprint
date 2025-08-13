# Nature's Way Soil Blueprint

Nature's Way Soil Blueprint is a Next.js TypeScript web application that showcases organic soil products. It uses Tailwind CSS for styling and features an interactive product catalog.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Prerequisites
- Node.js v20+ (confirmed available: v20.19.4)
- npm v10+ (confirmed available: v10.8.2) 
- Yarn v1.22+ (optional, available: v1.22.22)

### Bootstrap, Build, and Test the Repository

**CRITICAL**: All timing information below is based on validated testing. NEVER CANCEL these operations before the stated timeouts.

1. **Install dependencies** (takes ~2 minutes):
   ```bash
   npm install
   ```
   - NEVER CANCEL: Set timeout to 5+ minutes
   - Expect deprecation warnings - these are normal and do not affect functionality
   - May show 1 critical vulnerability - this is from development dependencies and safe to ignore

2. **Type check** (takes ~2 seconds):
   ```bash
   npm run type-check
   ```
   - Fast validation of TypeScript compilation
   - Must pass before proceeding with builds

3. **Build production** (takes ~15 seconds):
   ```bash
   npm run build
   ```
   - NEVER CANCEL: Set timeout to 3+ minutes for safety
   - Creates optimized production build in `.next/` directory
   - Includes automatic linting and type checking

4. **Run linting** (takes ~2 seconds):
   ```bash
   npm run lint
   ```
   - On first run, will prompt for ESLint configuration - select "Strict (recommended)" by pressing Enter
   - Creates `.eslintrc.json` automatically
   - Must pass with no errors for CI to succeed

### Development Workflow

1. **Start development server**:
   ```bash
   npm run dev
   ```
   - Starts on http://localhost:3000
   - Ready in ~2 seconds
   - Hot reload enabled for instant feedback

2. **Start production server** (requires build first):
   ```bash
   npm run build
   npm run start
   ```
   - Serves optimized production build
   - Ready in ~1 second after build completes

### API Testing
Test the API endpoint to verify functionality:
```bash
curl http://localhost:3000/api/hello
```
Expected response: `{"name":"Nature's Way Soil API","message":"API is working correctly"}`

## Validation

### Manual Testing Requirements
**ALWAYS perform these validation steps after making changes:**

1. **Build validation**: Run `npm run build` and ensure it completes without errors
2. **Lint validation**: Run `npm run lint` and ensure no ESLint errors
3. **Type validation**: Run `npm run type-check` and ensure TypeScript compilation succeeds
4. **Development server test**: 
   - Start with `npm run dev`
   - Visit http://localhost:3000
   - Verify the green Nature's Way Soil homepage loads
   - Click "Learn More" on any product card
   - Verify product details appear below with a "Close" button
   - Test the Close button functionality
5. **API test**: Verify `curl http://localhost:3000/api/hello` returns proper JSON response
6. **Production build test**:
   - Run `npm run build && npm run start`
   - Verify production server starts and API responds correctly

### Pre-commit Validation
**ALWAYS run these commands before committing changes:**
```bash
npm run type-check
npm run lint
npm run build
```
All must pass without errors or the CI will fail.

## Project Structure and Key Files

### Repository Root
```
.
├── README.md                 # Project documentation
├── package.json              # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration for Tailwind
├── next-env.d.ts           # Next.js TypeScript definitions
├── .eslintrc.json          # ESLint configuration (created on first lint)
├── data/                   # Application data
│   └── products.ts         # Product catalog data
├── pages/                  # Next.js pages (file-based routing)
│   ├── _app.tsx           # App wrapper component
│   ├── index.tsx          # Homepage component
│   └── api/               # API routes
│       └── hello.ts       # API endpoint example
├── styles/                # Global styles
│   └── globals.css        # Tailwind imports and global styles
├── .next/                 # Build output (created after build)
└── node_modules/          # Dependencies (created after npm install)
```

### Key Components
- **Homepage** (`pages/index.tsx`): Interactive product catalog with expandable details
- **API Route** (`pages/api/hello.ts`): Example API endpoint returning JSON
- **Product Data** (`data/products.ts`): Centralized product information
- **Global Styles** (`styles/globals.css`): Tailwind CSS imports and custom styles

## Technology Stack
- **Framework**: Next.js 14.2.5 (React 18)
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3.4+
- **Build Tool**: Next.js built-in bundler
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: npm (yarn also available)

## Common Development Tasks

### Adding New Pages
Create files in `pages/` directory. Next.js automatically creates routes:
- `pages/about.tsx` → `/about`
- `pages/products/[id].tsx` → `/products/123` (dynamic route)

### Adding New API Endpoints
Create files in `pages/api/` directory:
- `pages/api/products.ts` → `/api/products`

### Modifying Product Data
Edit `data/products.ts` to update the product catalog.

### Styling Changes
- Global styles: Edit `styles/globals.css`
- Component styles: Use Tailwind classes in JSX
- Custom Tailwind config: Edit `tailwind.config.js`

### TypeScript Types
- Add types in component files or create dedicated type files
- Import types from data files as needed
- Run `npm run type-check` frequently during development

## Troubleshooting

### Build Failures
1. Check TypeScript errors: `npm run type-check`
2. Check ESLint errors: `npm run lint`
3. Clear build cache: `rm -rf .next` then rebuild

### Development Server Issues
1. Stop server (Ctrl+C) and restart: `npm run dev`
2. Clear Next.js cache: `rm -rf .next`
3. Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`

### TypeScript Errors
- Ensure proper type imports
- Check for missing type definitions
- Use `any` sparingly and prefer proper typing

### ESLint Configuration
- First run of `npm run lint` configures ESLint automatically
- Choose "Strict (recommended)" when prompted
- Configuration is saved in `.eslintrc.json`

## Performance Notes
- Development builds are unoptimized for debugging
- Production builds include automatic optimization
- Static pages are pre-rendered for better performance
- API routes run server-side only

## Dependencies Management
- Use `npm install <package>` for runtime dependencies
- Use `npm install -D <package>` for development dependencies
- Keep dependencies updated but test thoroughly after updates
- Audit vulnerabilities with `npm audit` but development deps can often be ignored