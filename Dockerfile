# Build React App
FROM node:14.15.0 as builder
RUN mkdir -p /project/vision-mentoring-react
WORKDIR /project/vision-mentoring-react
ENV PATH /project/vision-mentoring-react/node_modules/.bin:$PATH
COPY package.json /project/vision-mentoring-react/package.json
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . /project/vision-mentoring-react
RUN npm run build


# Production Environment
FROM nginx:1.19.3-alpine
ENV PUBLIC_URL salt-mine.io
COPY --from=builder /project/vision-mentoring-react/build /usr/share/nginx/html
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
