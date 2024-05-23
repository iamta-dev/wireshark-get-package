// ข้อมูลที่ได้รับมา
const data = '\x18\x00\x00\x00`\r��\x04%\x06�\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x01�-\x0B���j�|�΅P\x18\x04�s3\x00\x00POST /api/trpc/post.create?batch=1 HTTP/1.1\r\n' +
    'Host: localhost:3000\r\n' +
    'Connection: keep-alive\r\n' +
    'Content-Length: 26\r\n' +
    'sec-ch-ua: "Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24"\r\n' +
    'content-type: application/json\r\n' +
    'x-trpc-source: nextjs-react\r\n' +
    'sec-ch-ua-mobile: ?0\r\n' +
    'trpc-accept: application/jsonl\r\n' +
    'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0\r\n' +
    'sec-ch-ua-platform: "Windows"\r\n' +
    'Accept: */*\r\n' +
    'Origin: http://localhost:3000\r\n' +
    'Sec-Fetch-Site: same-origin\r\n' +
    'Sec-Fetch-Mode: cors\r\n' +
    'Sec-Fetch-Dest: empty\r\n' +
    'Referer: http://localhost:3000/\r\n' +
    'Accept-Encoding: gzip, deflate, br, zstd\r\n' +
    'Accept-Language: en-US,en;q=0.9,th;q=0.8\r\n' +
    'Cookie: sidebar-collapsed=false; next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000; next-auth.csrf-token=a33844fa08fab65c63e2c782cd75694ef15f96ce9ddc48b648dead8c52df2b31%7Cf9cdb36cd93aaa2d1459db02bfdac848ac0df9e69f36c642811f9a986b55fc65; next-auth.session-token=d4dcfc26-aee4-4e94-9c75-2ee307777a14\r\n' +
    '\r\n' +
    '{"0":{"json":{"name":""}}}';

// แปลงข้อมูลให้เป็นสตริง
const buffer = Buffer.from(data, 'binary');
const text = buffer.toString('utf-8');

// แยกส่วน headers ออกมา
const headers = text.split('\r\n');

console.log(headers);

// หา header "Origin"
const originHeader = headers.find(header => header.startsWith('Origin: '));

// แสดงผลลัพธ์
if (originHeader) {
  console.log(originHeader);
} else {
  console.log('Origin header not found');
}