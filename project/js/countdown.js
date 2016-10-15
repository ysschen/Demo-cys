
function countTime(endtime){

	var currenttime = new Date();
	var timeval = endtime.getTime() - currenttime.getTime();
	var hours = parseInt(timeval/1000/60/60);
	hours = hours <= 9 ? "0" + hours : hours;
	var mins = parseInt(timeval/1000/60-hours*60);
	mins = mins <= 9 ? "0" + mins : mins;
	var secs = parseInt((timeval/1000)%60);
	secs = secs <= 9 ? "0" + secs : secs;
	var str = hours + ":" + mins + ":" + secs;

	return str;
}

function  countTimeThity(endtime){

	var currenttime = new Date();
	var timeval = endtime - currenttime.getTime();
	var mins = parseInt(timeval/1000/60);
	var secs = parseInt((timeval/1000)%60);
	var str = mins + "分" + secs + "秒";

	return str;

}