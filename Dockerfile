# Sử dụng image nginx để phục vụ web tĩnh
FROM nginx:alpine

# Xóa file mặc định của nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy nội dung của website vào thư mục phục vụ
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Chạy nginx
CMD ["nginx", "-g", "daemon off;"]