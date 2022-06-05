[![CircleCI](https://circleci.com/gh/somalisintech/website/tree/master.svg?style=svg)](https://circleci.com/gh/somalisintech/website/tree/master)
## Getting Started

First, run the development server:

### Local Server
```bash
yarn dev
```

### Docker 🐳
#### Build Image
```bash
docker build -t website --build-arg MENTORSHIP_SERVICE_API=$MENTORSHIP_SERVICE_API --build-arg GA_MEASUREMENT_ID=$GA_MEASUREMENT_ID .
```
#### Run Container
```bash
docker run -p 3000:3000 --name webapp website
```
#### Stop Container
```bash
docker stop webapp
```

### Docker Compose
#### Run Container
```bash
docker-compose up
```
#### Stop Container
```bash
docker-compose down
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
