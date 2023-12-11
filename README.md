# MyGameDB

A web app to store and share your scores of video games that you have played.

Made using:
- React
- Chakra UI
- Supabase

### Profiles Table
- Id: uuid (pk)
- Username: text
- Biography: text
- Ranking: text
- Hours: number
- image: text

### Games Table
- Id: uuid (pk)
- User_id: uuid (fk)
- Name: text
- Image: text
- Score: number