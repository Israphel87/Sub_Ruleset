/*by Liquor remove Super's ad/logo
[Script]
http-response ^https?://.*\.snssdk\.com/bds/feed/stream/ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/Super.js
[MITM]
hostname = *.snssdk.com
*/
var obj = $response.body.replace(/\":([0-9]{15,})/g, '\":\"$1str\"');
var obj = JSON.parse($response.body);
if (obj.data.data) {
  for (var i in obj.data.data) {
    if (obj.data.data[i].ad_info != null) {
      obj.data.data.splice(i, 1);
    }
  }
}
obj = JSON.stringify(obj);
body = obj.replace(/\":\"([0-9]{15,})str\"/g, '\":$1');
$done({body});
