      //����NodeJS��http moudleģ��
var http = require('http');
var server=http.createServer(
          function(request,response){
              //ʹ��response��ͻ��˷���http��ʽ����Ӧ
              //����������Ӧͷ
              //��һ����������Ӧ��״̬���루�ɹ���200��
              //�ڶ���������������Ӧ��������ʲô
              response.writeHead(200,{
                  'Content-Type':'text/html'
              });
              //������Ӧ������
              response.end('<html><body><input type="text"/><br/><br/><input type="password"/></body></html>');
      });
      server.listen(1234);
      console.log("serve is running at port:1234")