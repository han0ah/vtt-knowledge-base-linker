'''
REST API 처리를 담당하는 모듈 
'''
import json
import config
from db_manager import DBManager
from bottle import run, post, request, response

def enable_cors(fn):
    def _enable_cors(*args, **kwargs):
        # set CORS headers
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

        if request.method != 'OPTIONS':
            return fn(*args, **kwargs)
    return _enable_cors

@post('/episode_list', method=['OPTIONS','POST'])
@enable_cors
def get_episode_list():
    result = DBManager.executeQuery('select * from Friends_Episode_TBL where Season=1')
    return json.dumps(result)

DBManager.initialize(host='kbox.kaist.ac.kr', port=3142, user='root', password='swrcswrc',
                           db='KoreanWordNet2', charset='utf8', autocommit=True)

print ('sever is running')
run(host=config.host_uri, port=config.port)

'''
from sparql_communicator import QuerySparql

a = QuerySparql()

result = a.query('http://kbox.kaist.ac.kr:7190/sparql','http://kbox.kaist.ac.kr/vtt/friends','select ?p ?o { <http://kbox.kaist.ac.kr/vtt/resource/ross_geller> ?p ?o }')
print (result)
'''