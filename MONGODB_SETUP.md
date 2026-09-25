# MongoDB setup

1. Copy `.env.example` to `.env.local`.
2. Set `MONGODB_URI` to a MongoDB Atlas or local MongoDB connection string.
3. Run `npm install` and `npm run dev`.
4. API handlers automatically use Mongoose when `MONGODB_URI` is configured. Without it, the supplied demo data is used so the UI can still be previewed.

Models are in `src/models/mongoose.ts` and the cached connection helper is in `src/lib/mongodb.ts`.

Available endpoints include:

- `GET/POST /api/packages`
- `GET/PUT/DELETE /api/packages/[id]`
- `GET /api/faqs`
- `GET /api/offers`
- `GET/POST /api/inquiries`
- `GET/POST /api/contacts`
