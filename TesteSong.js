// Vars
var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/projectZ";

/*
	var path = android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/Seu diretorio";
 */


var ply = new android.media.MediaPlayer();

// Functions do Som

function playingSong(lagu, ulang) {
ply.stop();
ply.reset();
ply.setDataSource(path + "/" + lagu);
ply.prepare();
ply.setLooping(ula