#FROM hub.pazhdadeh.ir/oe-node-alpine:8.11.3
#MAINTAINER PazhDadeh@gmail.com
#WORKDIR /openerp-client
#RUN npm set registry https://npm.pazhdadeh.ir
#RUN npm config set proxy http://npm:npm@192.168.22.12:8080
#RUN npm config set https-proxy http://npm:npm@192.168.22.12:8080
#RUN npm install -g @angular/cli@7.0.5
#COPY . /openerp-client
#RUN npm install
#RUN npm run build

FROM hub.pazhdadeh.ir/nginx-1.13.12-alpine
COPY aot /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
