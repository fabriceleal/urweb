// Detect browser quirks that we should be aware of.

function needsDynPrefix() {
    var span = document.createElement("span");
    span.innerHTML = "<script>alert('test');</script>";
    var scripts = span.getElementsByTagName("script");
    return scripts.length == 0;
}

var dynPrefix = needsDynPrefix() ? "<span style=\"display:none\">A</span>" : "";

// Function versions of operators

function not(x) { return !x; }
function neg(x) { return -x; }

function eq(x, y) { return x == y; }
function plus(x, y) { return x + y; }
function minus(x, y) { return x - y; }
function times(x, y) { return x * y; }
function div(x, y) { return x / y; }
function divInt(x, y) { if (y == 0) er("Division by zero"); var n = x / y; return n < 0 ? Math.ceil(n) : Math.floor(n); }
function mod(x, y) { return x % y; }
function modInt(x, y) { if (y == 0) er("Division by zero"); var n = x % y; return n < 0 ? Math.ceil(n) : Math.floor(n); }
function lt(x, y) { return x < y; }
function le(x, y) { return x <= y; }

// Characters

function ord(c) { return c.codePointAt(0); }

var isLowerBitm = new Uint32Array(3915);
isLowerBitm[3] = 134217726; isLowerBitm[5] = 69207040; isLowerBitm[6] = 2147483648; isLowerBitm[7] = 4286578687; 
isLowerBitm[8] = 2863311530; isLowerBitm[9] = 1437248170; isLowerBitm[10] = 2863311701; isLowerBitm[11] = 3567954602; 
isLowerBitm[12] = 1310994729; isLowerBitm[13] = 3864079658; isLowerBitm[14] = 3042267712; isLowerBitm[15] = 2854857386; 
isLowerBitm[16] = 2863311530; isLowerBitm[17] = 2482678442; isLowerBitm[18] = 4294945413; isLowerBitm[19] = 4294967295; 
isLowerBitm[20] = 4293918719; isLowerBitm[21] = 33554431; isLowerBitm[22] = 3; isLowerBitm[23] = 31; 
isLowerBitm[26] = 32; isLowerBitm[27] = 1015676928; isLowerBitm[28] = 65536; isLowerBitm[29] = 4294963200; 
isLowerBitm[30] = 2867036159; isLowerBitm[31] = 422554282; isLowerBitm[33] = 4294901760; isLowerBitm[34] = 4294967295; 
isLowerBitm[35] = 2863311530; isLowerBitm[36] = 2863310850; isLowerBitm[37] = 2863311530; isLowerBitm[38] = 2863322452; 
isLowerBitm[39] = 2863311530; isLowerBitm[40] = 2863311530; isLowerBitm[41] = 43690; isLowerBitm[43] = 4294967294; 
isLowerBitm[44] = 255; isLowerBitm[159] = 1056964608; isLowerBitm[228] = 511; isLowerBitm[232] = 4294967295; 
isLowerBitm[233] = 4294967295; isLowerBitm[234] = 4294967295; isLowerBitm[235] = 4294967295; isLowerBitm[236] = 4294967295; 
isLowerBitm[237] = 4294967295; isLowerBitm[240] = 2863311530; isLowerBitm[241] = 2863311530; isLowerBitm[242] = 2863311530; 
isLowerBitm[243] = 2863311530; isLowerBitm[244] = 3219827370; isLowerBitm[245] = 2863311530; isLowerBitm[246] = 2863311530; 
isLowerBitm[247] = 2863311530; isLowerBitm[248] = 4129023; isLowerBitm[249] = 16711935; isLowerBitm[250] = 16711743; 
isLowerBitm[251] = 1073676543; isLowerBitm[252] = 16711935; isLowerBitm[253] = 1088356607; isLowerBitm[254] = 13566172; 
isLowerBitm[255] = 14418175; isLowerBitm[259] = 2147614720; isLowerBitm[260] = 536805376; isLowerBitm[264] = 574464; 
isLowerBitm[265] = 839942144; isLowerBitm[266] = 17344; isLowerBitm[267] = 4294901760; isLowerBitm[268] = 16; 
isLowerBitm[294] = 4294901760; isLowerBitm[295] = 1023; isLowerBitm[353] = 4294901760; isLowerBitm[354] = 2147483647; 
isLowerBitm[355] = 1071256930; isLowerBitm[356] = 2863311530; isLowerBitm[357] = 2863311530; isLowerBitm[358] = 2863311530; 
isLowerBitm[359] = 544794; isLowerBitm[360] = 4294967295; isLowerBitm[361] = 8383; isLowerBitm[1330] = 2863311530; 
isLowerBitm[1331] = 10922; isLowerBitm[1332] = 984263338; isLowerBitm[1337] = 2863377064; isLowerBitm[1338] = 2863311530; 
isLowerBitm[1339] = 2516560554; isLowerBitm[1340] = 2864337066; isLowerBitm[1341] = 10486442; isLowerBitm[1343] = 117440512; 
isLowerBitm[1369] = 4294901760; isLowerBitm[1370] = 4160749567; isLowerBitm[1371] = 4294901823; isLowerBitm[1372] = 4294967295; 
isLowerBitm[1373] = 4294967295; isLowerBitm[2008] = 16253055; isLowerBitm[2042] = 134217726; isLowerBitm[2081] = 4294967040; 
isLowerBitm[2082] = 65535; isLowerBitm[2086] = 4278190080; isLowerBitm[2087] = 268435455; isLowerBitm[2150] = 4294967295; 
isLowerBitm[2151] = 524287; isLowerBitm[2246] = 4294967295; isLowerBitm[3744] = 4227858432; isLowerBitm[3745] = 1048575; 
isLowerBitm[3746] = 4292853760; isLowerBitm[3747] = 255; isLowerBitm[3748] = 268435452; isLowerBitm[3749] = 3955228672; 
isLowerBitm[3750] = 65519; isLowerBitm[3751] = 4294966272; isLowerBitm[3752] = 3221225487; isLowerBitm[3753] = 16777215; 
isLowerBitm[3754] = 4294705152; isLowerBitm[3755] = 4095; isLowerBitm[3756] = 4294967232; isLowerBitm[3757] = 4227858432; 
isLowerBitm[3758] = 1048575; isLowerBitm[3759] = 4294950912; isLowerBitm[3760] = 255; isLowerBitm[3761] = 268435452; 
isLowerBitm[3762] = 4290772992; isLowerBitm[3763] = 65535; isLowerBitm[3764] = 4294966272; isLowerBitm[3765] = 63; 
isLowerBitm[3766] = 4160749564; isLowerBitm[3767] = 4026531843; isLowerBitm[3768] = 266338303; isLowerBitm[3769] = 4290772992; 
isLowerBitm[3770] = 4161535; isLowerBitm[3771] = 4294901760; isLowerBitm[3772] = 65023; isLowerBitm[3773] = 4294966272; 
isLowerBitm[3774] = 3063; isLowerBitm[3913] = 4294967292; isLowerBitm[3914] = 15; 

function isLower(c) {
	var cp = ord(c);
	var idx = Math.floor(cp / 32);
	var byt = isLowerBitm[idx];
	if (byt) {
		var mask = Math.pow(2, cp - idx * 32);
		return (byt & mask) != 0;
	}
	return false;
}

var isUpperBitm = new Uint32Array(3981);
isUpperBitm[2] = 134217726; isUpperBitm[6] = 2139095039; isUpperBitm[8] = 1431655765; isUpperBitm[9] = 2857719125; 
isUpperBitm[10] = 1431655594; isUpperBitm[11] = 727012693; isUpperBitm[12] = 2983972566; isUpperBitm[13] = 296669909; 
isUpperBitm[14] = 1252697232; isUpperBitm[15] = 1439847765; isUpperBitm[16] = 1431655765; isUpperBitm[17] = 1812288853; 
isUpperBitm[18] = 21882; isUpperBitm[27] = 2152005632; isUpperBitm[28] = 4294891328; isUpperBitm[29] = 4091; 
isUpperBitm[30] = 1427931136; isUpperBitm[31] = 3868218709; isUpperBitm[32] = 4294967295; isUpperBitm[33] = 65535; 
isUpperBitm[35] = 1431655765; isUpperBitm[36] = 1431655425; isUpperBitm[37] = 1431655765; isUpperBitm[38] = 1431644843; 
isUpperBitm[39] = 1431655765; isUpperBitm[40] = 1431655765; isUpperBitm[41] = 4294858069; isUpperBitm[42] = 8388607; 
isUpperBitm[133] = 4294967295; isUpperBitm[134] = 8383; isUpperBitm[157] = 4294967295; isUpperBitm[158] = 4294967295; 
isUpperBitm[159] = 4194303; isUpperBitm[240] = 1431655765; isUpperBitm[241] = 1431655765; isUpperBitm[242] = 1431655765; 
isUpperBitm[243] = 1431655765; isUpperBitm[244] = 1075139925; isUpperBitm[245] = 1431655765; isUpperBitm[246] = 1431655765; 
isUpperBitm[247] = 1431655765; isUpperBitm[248] = 1057029888; isUpperBitm[249] = 4278255360; isUpperBitm[250] = 2852142848; 
isUpperBitm[251] = 65280; isUpperBitm[253] = 251658240; isUpperBitm[254] = 251662080; isUpperBitm[255] = 251666176; 
isUpperBitm[264] = 1042757764; isUpperBitm[265] = 3222224208; isUpperBitm[266] = 32; isUpperBitm[267] = 65535; 
isUpperBitm[268] = 8; isUpperBitm[293] = 4290772992; isUpperBitm[294] = 65535; isUpperBitm[352] = 4294967295; 
isUpperBitm[353] = 32767; isUpperBitm[355] = 3223710365; isUpperBitm[356] = 1431655765; isUpperBitm[357] = 1431655765; 
isUpperBitm[358] = 1431655765; isUpperBitm[359] = 272389; isUpperBitm[1330] = 1431655765; isUpperBitm[1331] = 5461; 
isUpperBitm[1332] = 89478485; isUpperBitm[1337] = 1431590228; isUpperBitm[1338] = 1431655765; isUpperBitm[1339] = 1778406741; 
isUpperBitm[1340] = 1430595669; isUpperBitm[1341] = 6258005; isUpperBitm[2041] = 134217726; isUpperBitm[2080] = 4294967295; 
isUpperBitm[2081] = 255; isUpperBitm[2085] = 4294901760; isUpperBitm[2086] = 1048575; isUpperBitm[2148] = 4294967295; 
isUpperBitm[2149] = 524287; isUpperBitm[2245] = 4294967295; isUpperBitm[3744] = 67108863; isUpperBitm[3745] = 4293918720; 
isUpperBitm[3746] = 16383; isUpperBitm[3747] = 4294967040; isUpperBitm[3748] = 3489660931; isUpperBitm[3749] = 4185700; 
isUpperBitm[3750] = 4294901760; isUpperBitm[3751] = 1023; isUpperBitm[3752] = 534767536; isUpperBitm[3753] = 2063597568; 
isUpperBitm[3754] = 130143; isUpperBitm[3755] = 4294963200; isUpperBitm[3756] = 63; isUpperBitm[3757] = 67108863; 
isUpperBitm[3758] = 4293918720; isUpperBitm[3759] = 16383; isUpperBitm[3760] = 4294967040; isUpperBitm[3761] = 4026531843; 
isUpperBitm[3762] = 4194303; isUpperBitm[3763] = 4294901760; isUpperBitm[3764] = 1023; isUpperBitm[3765] = 4294967040; 
isUpperBitm[3766] = 1; isUpperBitm[3767] = 134217724; isUpperBitm[3768] = 4026531840; isUpperBitm[3769] = 2097151; 
isUpperBitm[3770] = 4290772992; isUpperBitm[3771] = 32767; isUpperBitm[3772] = 4294901760; isUpperBitm[3773] = 511; 
isUpperBitm[3774] = 1024; isUpperBitm[3912] = 4294967295; isUpperBitm[3913] = 3; isUpperBitm[3977] = 4294901760; 
isUpperBitm[3978] = 4294902783; isUpperBitm[3979] = 4294902783; isUpperBitm[3980] = 1023; 
function isUpper(c) {
	var cp = ord(c);
	var idx = Math.floor(cp / 32);
	var byt = isUpperBitm[idx];
	if (byt) {
		var mask = Math.pow(2, cp - idx * 32);
		return (byt & mask) != 0;
	}
	return false;
}

var isDigitBitm = new Uint32Array(3915);
isDigitBitm[1] = 67043328; isDigitBitm[51] = 1023; isDigitBitm[55] = 67043328; isDigitBitm[62] = 1023; 
isDigitBitm[75] = 65472; isDigitBitm[79] = 65472; isDigitBitm[83] = 65472; isDigitBitm[87] = 65472; 
isDigitBitm[91] = 65472; isDigitBitm[95] = 65472; isDigitBitm[99] = 65472; isDigitBitm[103] = 65472; 
isDigitBitm[107] = 65472; isDigitBitm[111] = 65472; isDigitBitm[114] = 67043328; isDigitBitm[118] = 67043328; 
isDigitBitm[121] = 1023; isDigitBitm[130] = 1023; isDigitBitm[132] = 67043328; isDigitBitm[191] = 1023; 
isDigitBitm[192] = 67043328; isDigitBitm[202] = 65472; isDigitBitm[206] = 67043328; isDigitBitm[212] = 67044351; 
isDigitBitm[218] = 67043328; isDigitBitm[221] = 67043328; isDigitBitm[226] = 67044351; isDigitBitm[1329] = 1023; 
isDigitBitm[1350] = 67043328; isDigitBitm[1352] = 1023; isDigitBitm[1358] = 67043328; isDigitBitm[1359] = 67043328; 
isDigitBitm[1362] = 67043328; isDigitBitm[1375] = 67043328; isDigitBitm[2040] = 67043328; isDigitBitm[2085] = 1023; 
isDigitBitm[2179] = 65472; isDigitBitm[2183] = 67043328; isDigitBitm[2185] = 4290772992; isDigitBitm[2190] = 67043328; 
isDigitBitm[2199] = 67043328; isDigitBitm[2210] = 67043328; isDigitBitm[2214] = 67043328; isDigitBitm[2226] = 67043328; 
isDigitBitm[2230] = 1023; isDigitBitm[2233] = 67043328; isDigitBitm[2247] = 1023; isDigitBitm[2274] = 67043328; 
isDigitBitm[2282] = 67043328; isDigitBitm[2899] = 1023; isDigitBitm[2906] = 67043328; isDigitBitm[3774] = 4294950912; 
isDigitBitm[3775] = 4294967295; isDigitBitm[3914] = 67043328; 
function isDigit(c) {
	var cp = ord(c);
	var idx = Math.floor(cp / 32);
	var byt = isDigitBitm[idx];
	if (byt) {
		var mask = Math.pow(2, cp - idx * 32);
		return (byt & mask) != 0;
	}
	return false;
}

var isAlphaBitm = new Uint32Array(6097);
isAlphaBitm[2] = 134217726; isAlphaBitm[3] = 134217726; isAlphaBitm[5] = 69207040; isAlphaBitm[6] = 4286578687; 
isAlphaBitm[7] = 4286578687; isAlphaBitm[8] = 4294967295; isAlphaBitm[9] = 4294967295; isAlphaBitm[10] = 4294967295; 
isAlphaBitm[11] = 4294967295; isAlphaBitm[12] = 4294967295; isAlphaBitm[13] = 4294967295; isAlphaBitm[14] = 4294967295; 
isAlphaBitm[15] = 4294967295; isAlphaBitm[16] = 4294967295; isAlphaBitm[17] = 4294967295; isAlphaBitm[18] = 4294967295; 
isAlphaBitm[19] = 4294967295; isAlphaBitm[20] = 4294967295; isAlphaBitm[21] = 4294967295; isAlphaBitm[22] = 262083; 
isAlphaBitm[23] = 20511; isAlphaBitm[26] = 32; isAlphaBitm[27] = 3168731136; isAlphaBitm[28] = 4294956864; 
isAlphaBitm[29] = 4294967291; isAlphaBitm[30] = 4294967295; isAlphaBitm[31] = 4290772991; isAlphaBitm[32] = 4294967295; 
isAlphaBitm[33] = 4294967295; isAlphaBitm[34] = 4294967295; isAlphaBitm[35] = 4294967295; isAlphaBitm[36] = 4294966275; 
isAlphaBitm[37] = 4294967295; isAlphaBitm[38] = 4294967295; isAlphaBitm[39] = 4294967295; isAlphaBitm[40] = 4294967295; 
isAlphaBitm[41] = 4294901759; isAlphaBitm[42] = 41943039; isAlphaBitm[43] = 4294967294; isAlphaBitm[44] = 255; 
isAlphaBitm[45] = 3221159936; isAlphaBitm[46] = 4294901942; isAlphaBitm[47] = 460799; isAlphaBitm[48] = 134152192; 
isAlphaBitm[49] = 4294967295; isAlphaBitm[50] = 4278190079; isAlphaBitm[51] = 4294950912; isAlphaBitm[52] = 4294967295; 
isAlphaBitm[53] = 4294967295; isAlphaBitm[54] = 535822335; isAlphaBitm[55] = 2617303550; isAlphaBitm[56] = 4294901760; 
isAlphaBitm[57] = 4294967295; isAlphaBitm[58] = 4294959104; isAlphaBitm[59] = 4294967295; isAlphaBitm[60] = 4294967295; 
isAlphaBitm[61] = 262143; isAlphaBitm[62] = 4294966272; isAlphaBitm[63] = 70256639; isAlphaBitm[64] = 4244635647; 
isAlphaBitm[65] = 8191; isAlphaBitm[66] = 33554431; isAlphaBitm[67] = 2047; isAlphaBitm[69] = 1071644671; 
isAlphaBitm[70] = 4293918720; isAlphaBitm[71] = 4294902776; isAlphaBitm[72] = 4294967295; isAlphaBitm[73] = 4026531839; 
isAlphaBitm[74] = 4292993023; isAlphaBitm[75] = 4294836239; isAlphaBitm[76] = 4294549487; isAlphaBitm[77] = 3821403647; 
isAlphaBitm[78] = 2961201567; isAlphaBitm[79] = 268632079; isAlphaBitm[80] = 4294543342; isAlphaBitm[81] = 3278765567; 
isAlphaBitm[82] = 1577195911; isAlphaBitm[83] = 4128768; isAlphaBitm[84] = 4294688750; isAlphaBitm[85] = 3824025087; 
isAlphaBitm[86] = 72639; isAlphaBitm[87] = 503316495; isAlphaBitm[88] = 4294549486; isAlphaBitm[89] = 3824025087; 
isAlphaBitm[90] = 2965379487; isAlphaBitm[91] = 131087; isAlphaBitm[92] = 3594373100; isAlphaBitm[93] = 3288319768; 
isAlphaBitm[94] = 8461767; isAlphaBitm[96] = 4294828015; isAlphaBitm[97] = 3825204735; isAlphaBitm[98] = 123739615; 
isAlphaBitm[99] = 15; isAlphaBitm[100] = 4294828015; isAlphaBitm[101] = 3824156159; isAlphaBitm[102] = 1080040927; 
isAlphaBitm[103] = 393231; isAlphaBitm[104] = 4294828015; isAlphaBitm[105] = 3892314111; isAlphaBitm[106] = 2163236319; 
isAlphaBitm[107] = 4227858447; isAlphaBitm[108] = 4236247020; isAlphaBitm[109] = 805044223; isAlphaBitm[110] = 4284448895; 
isAlphaBitm[111] = 786432; isAlphaBitm[112] = 4294967294; isAlphaBitm[113] = 134217727; isAlphaBitm[114] = 8319; 
isAlphaBitm[116] = 4277151126; isAlphaBitm[117] = 1006628014; isAlphaBitm[118] = 4026540127; isAlphaBitm[120] = 1; 
isAlphaBitm[122] = 4294967039; isAlphaBitm[123] = 4294844415; isAlphaBitm[124] = 4278189827; isAlphaBitm[125] = 536870911; 
isAlphaBitm[128] = 4294967295; isAlphaBitm[129] = 4185915391; isAlphaBitm[130] = 4294901760; isAlphaBitm[131] = 4294951399; 
isAlphaBitm[132] = 805322879; isAlphaBitm[133] = 4294967295; isAlphaBitm[134] = 4294910143; isAlphaBitm[135] = 4160749567; 
isAlphaBitm[136] = 4294967295; isAlphaBitm[137] = 4294967295; isAlphaBitm[138] = 4294967295; isAlphaBitm[139] = 4294967295; 
isAlphaBitm[140] = 4294967295; isAlphaBitm[141] = 4294967295; isAlphaBitm[142] = 4294967295; isAlphaBitm[143] = 4294967295; 
isAlphaBitm[144] = 4294967295; isAlphaBitm[145] = 4294967295; isAlphaBitm[146] = 1031749119; isAlphaBitm[147] = 4294967295; 
isAlphaBitm[148] = 4294917631; isAlphaBitm[149] = 2134769663; isAlphaBitm[150] = 4286578493; isAlphaBitm[151] = 4294967295; 
isAlphaBitm[152] = 4282253311; isAlphaBitm[153] = 4294967295; isAlphaBitm[154] = 2281701375; isAlphaBitm[156] = 65535; 
isAlphaBitm[157] = 4294967295; isAlphaBitm[158] = 4294967295; isAlphaBitm[159] = 1061158911; isAlphaBitm[160] = 4294967294; 
isAlphaBitm[161] = 4294967295; isAlphaBitm[162] = 4294967295; isAlphaBitm[163] = 4294967295; isAlphaBitm[164] = 4294967295; 
isAlphaBitm[165] = 4294967295; isAlphaBitm[166] = 4294967295; isAlphaBitm[167] = 4294967295; isAlphaBitm[168] = 4294967295; 
isAlphaBitm[169] = 4294967295; isAlphaBitm[170] = 4294967295; isAlphaBitm[171] = 4294967295; isAlphaBitm[172] = 4294967295; 
isAlphaBitm[173] = 4294967295; isAlphaBitm[174] = 4294967295; isAlphaBitm[175] = 4294967295; isAlphaBitm[176] = 4294967295; 
isAlphaBitm[177] = 4294967295; isAlphaBitm[178] = 4294967295; isAlphaBitm[179] = 4294942719; isAlphaBitm[180] = 134217726; 
isAlphaBitm[181] = 4294967295; isAlphaBitm[182] = 4294967295; isAlphaBitm[183] = 33540095; isAlphaBitm[184] = 1040383; 
isAlphaBitm[185] = 1048575; isAlphaBitm[186] = 1048575; isAlphaBitm[187] = 909311; isAlphaBitm[188] = 4294967295; 
isAlphaBitm[189] = 4291821567; isAlphaBitm[190] = 276824575; isAlphaBitm[193] = 4294967295; isAlphaBitm[194] = 4294967295; 
isAlphaBitm[195] = 16777215; isAlphaBitm[196] = 4294967295; isAlphaBitm[197] = 4294903807; isAlphaBitm[198] = 4294967295; 
isAlphaBitm[199] = 4194303; isAlphaBitm[200] = 2147483647; isAlphaBitm[201] = 33492991; isAlphaBitm[202] = 4294901760; 
isAlphaBitm[203] = 2047999; isAlphaBitm[204] = 4294967295; isAlphaBitm[205] = 4294905855; isAlphaBitm[206] = 1023; 
isAlphaBitm[208] = 268435455; isAlphaBitm[209] = 4294967295; isAlphaBitm[210] = 2147483647; isAlphaBitm[211] = 2097150; 
isAlphaBitm[213] = 128; isAlphaBitm[216] = 4294967295; isAlphaBitm[217] = 4293918719; isAlphaBitm[218] = 4079; 
isAlphaBitm[220] = 4294967295; isAlphaBitm[221] = 4227920895; isAlphaBitm[222] = 4294967295; isAlphaBitm[223] = 262079; 
isAlphaBitm[224] = 4294967295; isAlphaBitm[225] = 4194303; isAlphaBitm[226] = 4227915776; isAlphaBitm[227] = 1073741823; 
isAlphaBitm[228] = 511; isAlphaBitm[231] = 7331328; isAlphaBitm[232] = 4294967295; isAlphaBitm[233] = 4294967295; 
isAlphaBitm[234] = 4294967295; isAlphaBitm[235] = 4294967295; isAlphaBitm[236] = 4294967295; isAlphaBitm[237] = 4294967295; 
isAlphaBitm[239] = 2097024; isAlphaBitm[240] = 4294967295; isAlphaBitm[241] = 4294967295; isAlphaBitm[242] = 4294967295; 
isAlphaBitm[243] = 4294967295; isAlphaBitm[244] = 4294967295; isAlphaBitm[245] = 4294967295; isAlphaBitm[246] = 4294967295; 
isAlphaBitm[247] = 4294967295; isAlphaBitm[248] = 1061158911; isAlphaBitm[249] = 4294967295; isAlphaBitm[250] = 2868854591; 
isAlphaBitm[251] = 1073741823; isAlphaBitm[252] = 4294967295; isAlphaBitm[253] = 1608515583; isAlphaBitm[254] = 265232348; 
isAlphaBitm[255] = 534519807; isAlphaBitm[259] = 2147614720; isAlphaBitm[260] = 536805376; isAlphaBitm[264] = 1043332228; 
isAlphaBitm[265] = 4093623632; isAlphaBitm[266] = 17376; isAlphaBitm[267] = 4294967295; isAlphaBitm[268] = 511; 
isAlphaBitm[293] = 4290772992; isAlphaBitm[294] = 4294967295; isAlphaBitm[295] = 1023; isAlphaBitm[352] = 4294967295; 
isAlphaBitm[353] = 4294934527; isAlphaBitm[354] = 2147483647; isAlphaBitm[355] = 4294967295; isAlphaBitm[356] = 4294967295; 
isAlphaBitm[357] = 4294967295; isAlphaBitm[358] = 4294967295; isAlphaBitm[359] = 817183; isAlphaBitm[360] = 4294967295; 
isAlphaBitm[361] = 4294910143; isAlphaBitm[362] = 4294967295; isAlphaBitm[363] = 33023; isAlphaBitm[364] = 8388607; 
isAlphaBitm[365] = 2139062143; isAlphaBitm[366] = 2139062143; isAlphaBitm[367] = 4294967295; isAlphaBitm[369] = 32768; 
isAlphaBitm[384] = 224; isAlphaBitm[385] = 524157950; isAlphaBitm[386] = 4294967294; isAlphaBitm[387] = 4294967295; 
isAlphaBitm[388] = 3766484991; isAlphaBitm[389] = 4294967294; isAlphaBitm[390] = 4294967295; isAlphaBitm[391] = 4160749567; 
isAlphaBitm[392] = 4294967264; isAlphaBitm[393] = 4294868991; isAlphaBitm[394] = 4294967295; isAlphaBitm[395] = 4294967295; 
isAlphaBitm[396] = 32767; isAlphaBitm[397] = 134217727; isAlphaBitm[399] = 4294901760; isAlphaBitm[416] = 4294967295; 
isAlphaBitm[417] = 4294967295; isAlphaBitm[418] = 4294967295; isAlphaBitm[419] = 4294967295; isAlphaBitm[420] = 4294967295; 
isAlphaBitm[421] = 4294967295; isAlphaBitm[422] = 4294967295; isAlphaBitm[423] = 4294967295; isAlphaBitm[424] = 4294967295; 
isAlphaBitm[425] = 4294967295; isAlphaBitm[426] = 4294967295; isAlphaBitm[427] = 4294967295; isAlphaBitm[428] = 4294967295; 
isAlphaBitm[429] = 4294967295; isAlphaBitm[430] = 4294967295; isAlphaBitm[431] = 4294967295; isAlphaBitm[432] = 4294967295; 
isAlphaBitm[433] = 4294967295; isAlphaBitm[434] = 4294967295; isAlphaBitm[435] = 4294967295; isAlphaBitm[436] = 4294967295; 
isAlphaBitm[437] = 4294967295; isAlphaBitm[438] = 4294967295; isAlphaBitm[439] = 4294967295; isAlphaBitm[440] = 4294967295; 
isAlphaBitm[441] = 4294967295; isAlphaBitm[442] = 4294967295; isAlphaBitm[443] = 4294967295; isAlphaBitm[444] = 4294967295; 
isAlphaBitm[445] = 4294967295; isAlphaBitm[446] = 4294967295; isAlphaBitm[447] = 4294967295; isAlphaBitm[448] = 4294967295; 
isAlphaBitm[449] = 4294967295; isAlphaBitm[450] = 4294967295; isAlphaBitm[451] = 4294967295; isAlphaBitm[452] = 4294967295; 
isAlphaBitm[453] = 4294967295; isAlphaBitm[454] = 4294967295; isAlphaBitm[455] = 4294967295; isAlphaBitm[456] = 4294967295; 
isAlphaBitm[457] = 4294967295; isAlphaBitm[458] = 4294967295; isAlphaBitm[459] = 4294967295; isAlphaBitm[460] = 4294967295; 
isAlphaBitm[461] = 4294967295; isAlphaBitm[462] = 4294967295; isAlphaBitm[463] = 4294967295; isAlphaBitm[464] = 4294967295; 
isAlphaBitm[465] = 4294967295; isAlphaBitm[466] = 4294967295; isAlphaBitm[467] = 4294967295; isAlphaBitm[468] = 4294967295; 
isAlphaBitm[469] = 4294967295; isAlphaBitm[470] = 4294967295; isAlphaBitm[471] = 4294967295; isAlphaBitm[472] = 4294967295; 
isAlphaBitm[473] = 4294967295; isAlphaBitm[474] = 4294967295; isAlphaBitm[475] = 4294967295; isAlphaBitm[476] = 4294967295; 
isAlphaBitm[477] = 4294967295; isAlphaBitm[478] = 4294967295; isAlphaBitm[479] = 4294967295; isAlphaBitm[480] = 4294967295; 
isAlphaBitm[481] = 4294967295; isAlphaBitm[482] = 4294967295; isAlphaBitm[483] = 4294967295; isAlphaBitm[484] = 4294967295; 
isAlphaBitm[485] = 4294967295; isAlphaBitm[486] = 4294967295; isAlphaBitm[487] = 4294967295; isAlphaBitm[488] = 4294967295; 
isAlphaBitm[489] = 4294967295; isAlphaBitm[490] = 4294967295; isAlphaBitm[491] = 4294967295; isAlphaBitm[492] = 4294967295; 
isAlphaBitm[493] = 4294967295; isAlphaBitm[494] = 4294967295; isAlphaBitm[495] = 4294967295; isAlphaBitm[496] = 4294967295; 
isAlphaBitm[497] = 4294967295; isAlphaBitm[498] = 4294967295; isAlphaBitm[499] = 4294967295; isAlphaBitm[500] = 4294967295; 
isAlphaBitm[501] = 4294967295; isAlphaBitm[502] = 4294967295; isAlphaBitm[503] = 4294967295; isAlphaBitm[504] = 4294967295; 
isAlphaBitm[505] = 4294967295; isAlphaBitm[506] = 4294967295; isAlphaBitm[507] = 4294967295; isAlphaBitm[508] = 4294967295; 
isAlphaBitm[509] = 4294967295; isAlphaBitm[510] = 4294967295; isAlphaBitm[511] = 4294967295; isAlphaBitm[512] = 4294967295; 
isAlphaBitm[513] = 4294967295; isAlphaBitm[514] = 4294967295; isAlphaBitm[515] = 4294967295; isAlphaBitm[516] = 4294967295; 
isAlphaBitm[517] = 4294967295; isAlphaBitm[518] = 4294967295; isAlphaBitm[519] = 4294967295; isAlphaBitm[520] = 4294967295; 
isAlphaBitm[521] = 4294967295; isAlphaBitm[522] = 4294967295; isAlphaBitm[523] = 4294967295; isAlphaBitm[524] = 4294967295; 
isAlphaBitm[525] = 4294967295; isAlphaBitm[526] = 4294967295; isAlphaBitm[527] = 4294967295; isAlphaBitm[528] = 4294967295; 
isAlphaBitm[529] = 4294967295; isAlphaBitm[530] = 4294967295; isAlphaBitm[531] = 4294967295; isAlphaBitm[532] = 4294967295; 
isAlphaBitm[533] = 4294967295; isAlphaBitm[534] = 4294967295; isAlphaBitm[535] = 4294967295; isAlphaBitm[536] = 4294967295; 
isAlphaBitm[537] = 4294967295; isAlphaBitm[538] = 4294967295; isAlphaBitm[539] = 4294967295; isAlphaBitm[540] = 4294967295; 
isAlphaBitm[541] = 4294967295; isAlphaBitm[542] = 4294967295; isAlphaBitm[543] = 4294967295; isAlphaBitm[544] = 4294967295; 
isAlphaBitm[545] = 4294967295; isAlphaBitm[546] = 4294967295; isAlphaBitm[547] = 4294967295; isAlphaBitm[548] = 4294967295; 
isAlphaBitm[549] = 4294967295; isAlphaBitm[550] = 4294967295; isAlphaBitm[551] = 4294967295; isAlphaBitm[552] = 4294967295; 
isAlphaBitm[553] = 4294967295; isAlphaBitm[554] = 4294967295; isAlphaBitm[555] = 4294967295; isAlphaBitm[556] = 4294967295; 
isAlphaBitm[557] = 4294967295; isAlphaBitm[558] = 4294967295; isAlphaBitm[559] = 4294967295; isAlphaBitm[560] = 4294967295; 
isAlphaBitm[561] = 4294967295; isAlphaBitm[562] = 4294967295; isAlphaBitm[563] = 4294967295; isAlphaBitm[564] = 4294967295; 
isAlphaBitm[565] = 4294967295; isAlphaBitm[566] = 4294967295; isAlphaBitm[567] = 4294967295; isAlphaBitm[568] = 4294967295; 
isAlphaBitm[569] = 4294967295; isAlphaBitm[570] = 4294967295; isAlphaBitm[571] = 4294967295; isAlphaBitm[572] = 4294967295; 
isAlphaBitm[573] = 4294967295; isAlphaBitm[574] = 4294967295; isAlphaBitm[575] = 4294967295; isAlphaBitm[576] = 4294967295; 
isAlphaBitm[577] = 4294967295; isAlphaBitm[578] = 4294967295; isAlphaBitm[579] = 4294967295; isAlphaBitm[580] = 4294967295; 
isAlphaBitm[581] = 4294967295; isAlphaBitm[582] = 4294967295; isAlphaBitm[583] = 4294967295; isAlphaBitm[584] = 4294967295; 
isAlphaBitm[585] = 4294967295; isAlphaBitm[586] = 4294967295; isAlphaBitm[587] = 4294967295; isAlphaBitm[588] = 4294967295; 
isAlphaBitm[589] = 4294967295; isAlphaBitm[590] = 4294967295; isAlphaBitm[591] = 4294967295; isAlphaBitm[592] = 4294967295; 
isAlphaBitm[593] = 4294967295; isAlphaBitm[594] = 4294967295; isAlphaBitm[595] = 4294967295; isAlphaBitm[596] = 4294967295; 
isAlphaBitm[597] = 4294967295; isAlphaBitm[598] = 4294967295; isAlphaBitm[599] = 4294967295; isAlphaBitm[600] = 4294967295; 
isAlphaBitm[601] = 4294967295; isAlphaBitm[602] = 4294967295; isAlphaBitm[603] = 4294967295; isAlphaBitm[604] = 4294967295; 
isAlphaBitm[605] = 4294967295; isAlphaBitm[606] = 4294967295; isAlphaBitm[607] = 4294967295; isAlphaBitm[608] = 4294967295; 
isAlphaBitm[609] = 4294967295; isAlphaBitm[610] = 4294967295; isAlphaBitm[611] = 4294967295; isAlphaBitm[612] = 4294967295; 
isAlphaBitm[613] = 4294967295; isAlphaBitm[614] = 4294967295; isAlphaBitm[615] = 4294967295; isAlphaBitm[616] = 4294967295; 
isAlphaBitm[617] = 4294967295; isAlphaBitm[618] = 4294967295; isAlphaBitm[619] = 4294967295; isAlphaBitm[620] = 4294967295; 
isAlphaBitm[621] = 4194303; isAlphaBitm[624] = 4294967295; isAlphaBitm[625] = 4294967295; isAlphaBitm[626] = 4294967295; 
isAlphaBitm[627] = 4294967295; isAlphaBitm[628] = 4294967295; isAlphaBitm[629] = 4294967295; isAlphaBitm[630] = 4294967295; 
isAlphaBitm[631] = 4294967295; isAlphaBitm[632] = 4294967295; isAlphaBitm[633] = 4294967295; isAlphaBitm[634] = 4294967295; 
isAlphaBitm[635] = 4294967295; isAlphaBitm[636] = 4294967295; isAlphaBitm[637] = 4294967295; isAlphaBitm[638] = 4294967295; 
isAlphaBitm[639] = 4294967295; isAlphaBitm[640] = 4294967295; isAlphaBitm[641] = 4294967295; isAlphaBitm[642] = 4294967295; 
isAlphaBitm[643] = 4294967295; isAlphaBitm[644] = 4294967295; isAlphaBitm[645] = 4294967295; isAlphaBitm[646] = 4294967295; 
isAlphaBitm[647] = 4294967295; isAlphaBitm[648] = 4294967295; isAlphaBitm[649] = 4294967295; isAlphaBitm[650] = 4294967295; 
isAlphaBitm[651] = 4294967295; isAlphaBitm[652] = 4294967295; isAlphaBitm[653] = 4294967295; isAlphaBitm[654] = 4294967295; 
isAlphaBitm[655] = 4294967295; isAlphaBitm[656] = 4294967295; isAlphaBitm[657] = 4294967295; isAlphaBitm[658] = 4294967295; 
isAlphaBitm[659] = 4294967295; isAlphaBitm[660] = 4294967295; isAlphaBitm[661] = 4294967295; isAlphaBitm[662] = 4294967295; 
isAlphaBitm[663] = 4294967295; isAlphaBitm[664] = 4294967295; isAlphaBitm[665] = 4294967295; isAlphaBitm[666] = 4294967295; 
isAlphaBitm[667] = 4294967295; isAlphaBitm[668] = 4294967295; isAlphaBitm[669] = 4294967295; isAlphaBitm[670] = 4294967295; 
isAlphaBitm[671] = 4294967295; isAlphaBitm[672] = 4294967295; isAlphaBitm[673] = 4294967295; isAlphaBitm[674] = 4294967295; 
isAlphaBitm[675] = 4294967295; isAlphaBitm[676] = 4294967295; isAlphaBitm[677] = 4294967295; isAlphaBitm[678] = 4294967295; 
isAlphaBitm[679] = 4294967295; isAlphaBitm[680] = 4294967295; isAlphaBitm[681] = 4294967295; isAlphaBitm[682] = 4294967295; 
isAlphaBitm[683] = 4294967295; isAlphaBitm[684] = 4294967295; isAlphaBitm[685] = 4294967295; isAlphaBitm[686] = 4294967295; 
isAlphaBitm[687] = 4294967295; isAlphaBitm[688] = 4294967295; isAlphaBitm[689] = 4294967295; isAlphaBitm[690] = 4294967295; 
isAlphaBitm[691] = 4294967295; isAlphaBitm[692] = 4294967295; isAlphaBitm[693] = 4294967295; isAlphaBitm[694] = 4294967295; 
isAlphaBitm[695] = 4294967295; isAlphaBitm[696] = 4294967295; isAlphaBitm[697] = 4294967295; isAlphaBitm[698] = 4294967295; 
isAlphaBitm[699] = 4294967295; isAlphaBitm[700] = 4294967295; isAlphaBitm[701] = 4294967295; isAlphaBitm[702] = 4294967295; 
isAlphaBitm[703] = 4294967295; isAlphaBitm[704] = 4294967295; isAlphaBitm[705] = 4294967295; isAlphaBitm[706] = 4294967295; 
isAlphaBitm[707] = 4294967295; isAlphaBitm[708] = 4294967295; isAlphaBitm[709] = 4294967295; isAlphaBitm[710] = 4294967295; 
isAlphaBitm[711] = 4294967295; isAlphaBitm[712] = 4294967295; isAlphaBitm[713] = 4294967295; isAlphaBitm[714] = 4294967295; 
isAlphaBitm[715] = 4294967295; isAlphaBitm[716] = 4294967295; isAlphaBitm[717] = 4294967295; isAlphaBitm[718] = 4294967295; 
isAlphaBitm[719] = 4294967295; isAlphaBitm[720] = 4294967295; isAlphaBitm[721] = 4294967295; isAlphaBitm[722] = 4294967295; 
isAlphaBitm[723] = 4294967295; isAlphaBitm[724] = 4294967295; isAlphaBitm[725] = 4294967295; isAlphaBitm[726] = 4294967295; 
isAlphaBitm[727] = 4294967295; isAlphaBitm[728] = 4294967295; isAlphaBitm[729] = 4294967295; isAlphaBitm[730] = 4294967295; 
isAlphaBitm[731] = 4294967295; isAlphaBitm[732] = 4294967295; isAlphaBitm[733] = 4294967295; isAlphaBitm[734] = 4294967295; 
isAlphaBitm[735] = 4294967295; isAlphaBitm[736] = 4294967295; isAlphaBitm[737] = 4294967295; isAlphaBitm[738] = 4294967295; 
isAlphaBitm[739] = 4294967295; isAlphaBitm[740] = 4294967295; isAlphaBitm[741] = 4294967295; isAlphaBitm[742] = 4294967295; 
isAlphaBitm[743] = 4294967295; isAlphaBitm[744] = 4294967295; isAlphaBitm[745] = 4294967295; isAlphaBitm[746] = 4294967295; 
isAlphaBitm[747] = 4294967295; isAlphaBitm[748] = 4294967295; isAlphaBitm[749] = 4294967295; isAlphaBitm[750] = 4294967295; 
isAlphaBitm[751] = 4294967295; isAlphaBitm[752] = 4294967295; isAlphaBitm[753] = 4294967295; isAlphaBitm[754] = 4294967295; 
isAlphaBitm[755] = 4294967295; isAlphaBitm[756] = 4294967295; isAlphaBitm[757] = 4294967295; isAlphaBitm[758] = 4294967295; 
isAlphaBitm[759] = 4294967295; isAlphaBitm[760] = 4294967295; isAlphaBitm[761] = 4294967295; isAlphaBitm[762] = 4294967295; 
isAlphaBitm[763] = 4294967295; isAlphaBitm[764] = 4294967295; isAlphaBitm[765] = 4294967295; isAlphaBitm[766] = 4294967295; 
isAlphaBitm[767] = 4294967295; isAlphaBitm[768] = 4294967295; isAlphaBitm[769] = 4294967295; isAlphaBitm[770] = 4294967295; 
isAlphaBitm[771] = 4294967295; isAlphaBitm[772] = 4294967295; isAlphaBitm[773] = 4294967295; isAlphaBitm[774] = 4294967295; 
isAlphaBitm[775] = 4294967295; isAlphaBitm[776] = 4294967295; isAlphaBitm[777] = 4294967295; isAlphaBitm[778] = 4294967295; 
isAlphaBitm[779] = 4294967295; isAlphaBitm[780] = 4294967295; isAlphaBitm[781] = 4294967295; isAlphaBitm[782] = 4294967295; 
isAlphaBitm[783] = 4294967295; isAlphaBitm[784] = 4294967295; isAlphaBitm[785] = 4294967295; isAlphaBitm[786] = 4294967295; 
isAlphaBitm[787] = 4294967295; isAlphaBitm[788] = 4294967295; isAlphaBitm[789] = 4294967295; isAlphaBitm[790] = 4294967295; 
isAlphaBitm[791] = 4294967295; isAlphaBitm[792] = 4294967295; isAlphaBitm[793] = 4294967295; isAlphaBitm[794] = 4294967295; 
isAlphaBitm[795] = 4294967295; isAlphaBitm[796] = 4294967295; isAlphaBitm[797] = 4294967295; isAlphaBitm[798] = 4294967295; 
isAlphaBitm[799] = 4294967295; isAlphaBitm[800] = 4294967295; isAlphaBitm[801] = 4294967295; isAlphaBitm[802] = 4294967295; 
isAlphaBitm[803] = 4294967295; isAlphaBitm[804] = 4294967295; isAlphaBitm[805] = 4294967295; isAlphaBitm[806] = 4294967295; 
isAlphaBitm[807] = 4294967295; isAlphaBitm[808] = 4294967295; isAlphaBitm[809] = 4294967295; isAlphaBitm[810] = 4294967295; 
isAlphaBitm[811] = 4294967295; isAlphaBitm[812] = 4294967295; isAlphaBitm[813] = 4294967295; isAlphaBitm[814] = 4294967295; 
isAlphaBitm[815] = 4294967295; isAlphaBitm[816] = 4294967295; isAlphaBitm[817] = 4294967295; isAlphaBitm[818] = 4294967295; 
isAlphaBitm[819] = 4294967295; isAlphaBitm[820] = 4294967295; isAlphaBitm[821] = 4294967295; isAlphaBitm[822] = 4294967295; 
isAlphaBitm[823] = 4294967295; isAlphaBitm[824] = 4294967295; isAlphaBitm[825] = 4294967295; isAlphaBitm[826] = 4294967295; 
isAlphaBitm[827] = 4294967295; isAlphaBitm[828] = 4294967295; isAlphaBitm[829] = 4294967295; isAlphaBitm[830] = 4294967295; 
isAlphaBitm[831] = 4294967295; isAlphaBitm[832] = 4294967295; isAlphaBitm[833] = 4294967295; isAlphaBitm[834] = 4294967295; 
isAlphaBitm[835] = 4294967295; isAlphaBitm[836] = 4294967295; isAlphaBitm[837] = 4294967295; isAlphaBitm[838] = 4294967295; 
isAlphaBitm[839] = 4294967295; isAlphaBitm[840] = 4294967295; isAlphaBitm[841] = 4294967295; isAlphaBitm[842] = 4294967295; 
isAlphaBitm[843] = 4294967295; isAlphaBitm[844] = 4294967295; isAlphaBitm[845] = 4294967295; isAlphaBitm[846] = 4294967295; 
isAlphaBitm[847] = 4294967295; isAlphaBitm[848] = 4294967295; isAlphaBitm[849] = 4294967295; isAlphaBitm[850] = 4294967295; 
isAlphaBitm[851] = 4294967295; isAlphaBitm[852] = 4294967295; isAlphaBitm[853] = 4294967295; isAlphaBitm[854] = 4294967295; 
isAlphaBitm[855] = 4294967295; isAlphaBitm[856] = 4294967295; isAlphaBitm[857] = 4294967295; isAlphaBitm[858] = 4294967295; 
isAlphaBitm[859] = 4294967295; isAlphaBitm[860] = 4294967295; isAlphaBitm[861] = 4294967295; isAlphaBitm[862] = 4294967295; 
isAlphaBitm[863] = 4294967295; isAlphaBitm[864] = 4294967295; isAlphaBitm[865] = 4294967295; isAlphaBitm[866] = 4294967295; 
isAlphaBitm[867] = 4294967295; isAlphaBitm[868] = 4294967295; isAlphaBitm[869] = 4294967295; isAlphaBitm[870] = 4294967295; 
isAlphaBitm[871] = 4294967295; isAlphaBitm[872] = 4294967295; isAlphaBitm[873] = 4294967295; isAlphaBitm[874] = 4294967295; 
isAlphaBitm[875] = 4294967295; isAlphaBitm[876] = 4294967295; isAlphaBitm[877] = 4294967295; isAlphaBitm[878] = 4294967295; 
isAlphaBitm[879] = 4294967295; isAlphaBitm[880] = 4294967295; isAlphaBitm[881] = 4294967295; isAlphaBitm[882] = 4294967295; 
isAlphaBitm[883] = 4294967295; isAlphaBitm[884] = 4294967295; isAlphaBitm[885] = 4294967295; isAlphaBitm[886] = 4294967295; 
isAlphaBitm[887] = 4294967295; isAlphaBitm[888] = 4294967295; isAlphaBitm[889] = 4294967295; isAlphaBitm[890] = 4294967295; 
isAlphaBitm[891] = 4294967295; isAlphaBitm[892] = 4294967295; isAlphaBitm[893] = 4294967295; isAlphaBitm[894] = 4294967295; 
isAlphaBitm[895] = 4294967295; isAlphaBitm[896] = 4294967295; isAlphaBitm[897] = 4294967295; isAlphaBitm[898] = 4294967295; 
isAlphaBitm[899] = 4294967295; isAlphaBitm[900] = 4294967295; isAlphaBitm[901] = 4294967295; isAlphaBitm[902] = 4294967295; 
isAlphaBitm[903] = 4294967295; isAlphaBitm[904] = 4294967295; isAlphaBitm[905] = 4294967295; isAlphaBitm[906] = 4294967295; 
isAlphaBitm[907] = 4294967295; isAlphaBitm[908] = 4294967295; isAlphaBitm[909] = 4294967295; isAlphaBitm[910] = 4294967295; 
isAlphaBitm[911] = 4294967295; isAlphaBitm[912] = 4294967295; isAlphaBitm[913] = 4294967295; isAlphaBitm[914] = 4294967295; 
isAlphaBitm[915] = 4294967295; isAlphaBitm[916] = 4294967295; isAlphaBitm[917] = 4294967295; isAlphaBitm[918] = 4294967295; 
isAlphaBitm[919] = 4294967295; isAlphaBitm[920] = 4294967295; isAlphaBitm[921] = 4294967295; isAlphaBitm[922] = 4294967295; 
isAlphaBitm[923] = 4294967295; isAlphaBitm[924] = 4294967295; isAlphaBitm[925] = 4294967295; isAlphaBitm[926] = 4294967295; 
isAlphaBitm[927] = 4294967295; isAlphaBitm[928] = 4294967295; isAlphaBitm[929] = 4294967295; isAlphaBitm[930] = 4294967295; 
isAlphaBitm[931] = 4294967295; isAlphaBitm[932] = 4294967295; isAlphaBitm[933] = 4294967295; isAlphaBitm[934] = 4294967295; 
isAlphaBitm[935] = 4294967295; isAlphaBitm[936] = 4294967295; isAlphaBitm[937] = 4294967295; isAlphaBitm[938] = 4294967295; 
isAlphaBitm[939] = 4294967295; isAlphaBitm[940] = 4294967295; isAlphaBitm[941] = 4294967295; isAlphaBitm[942] = 4294967295; 
isAlphaBitm[943] = 4294967295; isAlphaBitm[944] = 4294967295; isAlphaBitm[945] = 4294967295; isAlphaBitm[946] = 4294967295; 
isAlphaBitm[947] = 4294967295; isAlphaBitm[948] = 4294967295; isAlphaBitm[949] = 4294967295; isAlphaBitm[950] = 4294967295; 
isAlphaBitm[951] = 4294967295; isAlphaBitm[952] = 4294967295; isAlphaBitm[953] = 4294967295; isAlphaBitm[954] = 4294967295; 
isAlphaBitm[955] = 4294967295; isAlphaBitm[956] = 4294967295; isAlphaBitm[957] = 4294967295; isAlphaBitm[958] = 4294967295; 
isAlphaBitm[959] = 4294967295; isAlphaBitm[960] = 4294967295; isAlphaBitm[961] = 4294967295; isAlphaBitm[962] = 4294967295; 
isAlphaBitm[963] = 4294967295; isAlphaBitm[964] = 4294967295; isAlphaBitm[965] = 4294967295; isAlphaBitm[966] = 4294967295; 
isAlphaBitm[967] = 4294967295; isAlphaBitm[968] = 4294967295; isAlphaBitm[969] = 4294967295; isAlphaBitm[970] = 4294967295; 
isAlphaBitm[971] = 4294967295; isAlphaBitm[972] = 4294967295; isAlphaBitm[973] = 4294967295; isAlphaBitm[974] = 4294967295; 
isAlphaBitm[975] = 4294967295; isAlphaBitm[976] = 4294967295; isAlphaBitm[977] = 4294967295; isAlphaBitm[978] = 4294967295; 
isAlphaBitm[979] = 4294967295; isAlphaBitm[980] = 4294967295; isAlphaBitm[981] = 4294967295; isAlphaBitm[982] = 4294967295; 
isAlphaBitm[983] = 4294967295; isAlphaBitm[984] = 4294967295; isAlphaBitm[985] = 4294967295; isAlphaBitm[986] = 4294967295; 
isAlphaBitm[987] = 4294967295; isAlphaBitm[988] = 4294967295; isAlphaBitm[989] = 4294967295; isAlphaBitm[990] = 4294967295; 
isAlphaBitm[991] = 4294967295; isAlphaBitm[992] = 4294967295; isAlphaBitm[993] = 4294967295; isAlphaBitm[994] = 4294967295; 
isAlphaBitm[995] = 4294967295; isAlphaBitm[996] = 4294967295; isAlphaBitm[997] = 4294967295; isAlphaBitm[998] = 4294967295; 
isAlphaBitm[999] = 4294967295; isAlphaBitm[1000] = 4294967295; isAlphaBitm[1001] = 4294967295; isAlphaBitm[1002] = 4294967295; 
isAlphaBitm[1003] = 4294967295; isAlphaBitm[1004] = 4294967295; isAlphaBitm[1005] = 4294967295; isAlphaBitm[1006] = 4294967295; 
isAlphaBitm[1007] = 4294967295; isAlphaBitm[1008] = 4294967295; isAlphaBitm[1009] = 4294967295; isAlphaBitm[1010] = 4294967295; 
isAlphaBitm[1011] = 4294967295; isAlphaBitm[1012] = 4294967295; isAlphaBitm[1013] = 4294967295; isAlphaBitm[1014] = 4294967295; 
isAlphaBitm[1015] = 4294967295; isAlphaBitm[1016] = 4294967295; isAlphaBitm[1017] = 4294967295; isAlphaBitm[1018] = 4294967295; 
isAlphaBitm[1019] = 4294967295; isAlphaBitm[1020] = 4294967295; isAlphaBitm[1021] = 4294967295; isAlphaBitm[1022] = 4294967295; 
isAlphaBitm[1023] = 4294967295; isAlphaBitm[1024] = 4294967295; isAlphaBitm[1025] = 4294967295; isAlphaBitm[1026] = 4294967295; 
isAlphaBitm[1027] = 4294967295; isAlphaBitm[1028] = 4294967295; isAlphaBitm[1029] = 4294967295; isAlphaBitm[1030] = 4294967295; 
isAlphaBitm[1031] = 4294967295; isAlphaBitm[1032] = 4294967295; isAlphaBitm[1033] = 4294967295; isAlphaBitm[1034] = 4294967295; 
isAlphaBitm[1035] = 4294967295; isAlphaBitm[1036] = 4294967295; isAlphaBitm[1037] = 4294967295; isAlphaBitm[1038] = 4294967295; 
isAlphaBitm[1039] = 4294967295; isAlphaBitm[1040] = 4294967295; isAlphaBitm[1041] = 4294967295; isAlphaBitm[1042] = 4294967295; 
isAlphaBitm[1043] = 4294967295; isAlphaBitm[1044] = 4294967295; isAlphaBitm[1045] = 4294967295; isAlphaBitm[1046] = 4294967295; 
isAlphaBitm[1047] = 4294967295; isAlphaBitm[1048] = 4294967295; isAlphaBitm[1049] = 4294967295; isAlphaBitm[1050] = 4294967295; 
isAlphaBitm[1051] = 4294967295; isAlphaBitm[1052] = 4294967295; isAlphaBitm[1053] = 4294967295; isAlphaBitm[1054] = 4294967295; 
isAlphaBitm[1055] = 4294967295; isAlphaBitm[1056] = 4294967295; isAlphaBitm[1057] = 4294967295; isAlphaBitm[1058] = 4294967295; 
isAlphaBitm[1059] = 4294967295; isAlphaBitm[1060] = 4294967295; isAlphaBitm[1061] = 4294967295; isAlphaBitm[1062] = 4294967295; 
isAlphaBitm[1063] = 4294967295; isAlphaBitm[1064] = 4294967295; isAlphaBitm[1065] = 4294967295; isAlphaBitm[1066] = 4294967295; 
isAlphaBitm[1067] = 4294967295; isAlphaBitm[1068] = 4294967295; isAlphaBitm[1069] = 4294967295; isAlphaBitm[1070] = 4294967295; 
isAlphaBitm[1071] = 4294967295; isAlphaBitm[1072] = 4294967295; isAlphaBitm[1073] = 4294967295; isAlphaBitm[1074] = 4294967295; 
isAlphaBitm[1075] = 4294967295; isAlphaBitm[1076] = 4294967295; isAlphaBitm[1077] = 4294967295; isAlphaBitm[1078] = 4294967295; 
isAlphaBitm[1079] = 4294967295; isAlphaBitm[1080] = 4294967295; isAlphaBitm[1081] = 4294967295; isAlphaBitm[1082] = 4294967295; 
isAlphaBitm[1083] = 4294967295; isAlphaBitm[1084] = 4294967295; isAlphaBitm[1085] = 4294967295; isAlphaBitm[1086] = 4294967295; 
isAlphaBitm[1087] = 4294967295; isAlphaBitm[1088] = 4294967295; isAlphaBitm[1089] = 4294967295; isAlphaBitm[1090] = 4294967295; 
isAlphaBitm[1091] = 4294967295; isAlphaBitm[1092] = 4294967295; isAlphaBitm[1093] = 4294967295; isAlphaBitm[1094] = 4294967295; 
isAlphaBitm[1095] = 4294967295; isAlphaBitm[1096] = 4294967295; isAlphaBitm[1097] = 4294967295; isAlphaBitm[1098] = 4294967295; 
isAlphaBitm[1099] = 4294967295; isAlphaBitm[1100] = 4294967295; isAlphaBitm[1101] = 4294967295; isAlphaBitm[1102] = 4294967295; 
isAlphaBitm[1103] = 4294967295; isAlphaBitm[1104] = 4294967295; isAlphaBitm[1105] = 4294967295; isAlphaBitm[1106] = 4294967295; 
isAlphaBitm[1107] = 4294967295; isAlphaBitm[1108] = 4294967295; isAlphaBitm[1109] = 4294967295; isAlphaBitm[1110] = 4294967295; 
isAlphaBitm[1111] = 4294967295; isAlphaBitm[1112] = 4294967295; isAlphaBitm[1113] = 4294967295; isAlphaBitm[1114] = 4294967295; 
isAlphaBitm[1115] = 4294967295; isAlphaBitm[1116] = 4294967295; isAlphaBitm[1117] = 4294967295; isAlphaBitm[1118] = 4294967295; 
isAlphaBitm[1119] = 4294967295; isAlphaBitm[1120] = 4294967295; isAlphaBitm[1121] = 4294967295; isAlphaBitm[1122] = 4294967295; 
isAlphaBitm[1123] = 4294967295; isAlphaBitm[1124] = 4294967295; isAlphaBitm[1125] = 4294967295; isAlphaBitm[1126] = 4294967295; 
isAlphaBitm[1127] = 4294967295; isAlphaBitm[1128] = 4294967295; isAlphaBitm[1129] = 4294967295; isAlphaBitm[1130] = 4294967295; 
isAlphaBitm[1131] = 4294967295; isAlphaBitm[1132] = 4294967295; isAlphaBitm[1133] = 4294967295; isAlphaBitm[1134] = 4294967295; 
isAlphaBitm[1135] = 4294967295; isAlphaBitm[1136] = 4294967295; isAlphaBitm[1137] = 4294967295; isAlphaBitm[1138] = 4294967295; 
isAlphaBitm[1139] = 4294967295; isAlphaBitm[1140] = 4294967295; isAlphaBitm[1141] = 4294967295; isAlphaBitm[1142] = 4294967295; 
isAlphaBitm[1143] = 4294967295; isAlphaBitm[1144] = 4294967295; isAlphaBitm[1145] = 4294967295; isAlphaBitm[1146] = 4294967295; 
isAlphaBitm[1147] = 4294967295; isAlphaBitm[1148] = 4294967295; isAlphaBitm[1149] = 4294967295; isAlphaBitm[1150] = 4294967295; 
isAlphaBitm[1151] = 4294967295; isAlphaBitm[1152] = 4294967295; isAlphaBitm[1153] = 4294967295; isAlphaBitm[1154] = 4294967295; 
isAlphaBitm[1155] = 4294967295; isAlphaBitm[1156] = 4294967295; isAlphaBitm[1157] = 4294967295; isAlphaBitm[1158] = 4294967295; 
isAlphaBitm[1159] = 4294967295; isAlphaBitm[1160] = 4294967295; isAlphaBitm[1161] = 4294967295; isAlphaBitm[1162] = 4294967295; 
isAlphaBitm[1163] = 4294967295; isAlphaBitm[1164] = 4294967295; isAlphaBitm[1165] = 4294967295; isAlphaBitm[1166] = 4294967295; 
isAlphaBitm[1167] = 4294967295; isAlphaBitm[1168] = 4294967295; isAlphaBitm[1169] = 4294967295; isAlphaBitm[1170] = 4294967295; 
isAlphaBitm[1171] = 4294967295; isAlphaBitm[1172] = 4294967295; isAlphaBitm[1173] = 4294967295; isAlphaBitm[1174] = 4294967295; 
isAlphaBitm[1175] = 4294967295; isAlphaBitm[1176] = 4294967295; isAlphaBitm[1177] = 4294967295; isAlphaBitm[1178] = 4294967295; 
isAlphaBitm[1179] = 4294967295; isAlphaBitm[1180] = 4294967295; isAlphaBitm[1181] = 4294967295; isAlphaBitm[1182] = 4294967295; 
isAlphaBitm[1183] = 4294967295; isAlphaBitm[1184] = 4294967295; isAlphaBitm[1185] = 4294967295; isAlphaBitm[1186] = 4294967295; 
isAlphaBitm[1187] = 4294967295; isAlphaBitm[1188] = 4294967295; isAlphaBitm[1189] = 4294967295; isAlphaBitm[1190] = 4294967295; 
isAlphaBitm[1191] = 4294967295; isAlphaBitm[1192] = 4294967295; isAlphaBitm[1193] = 4294967295; isAlphaBitm[1194] = 4294967295; 
isAlphaBitm[1195] = 4294967295; isAlphaBitm[1196] = 4294967295; isAlphaBitm[1197] = 4294967295; isAlphaBitm[1198] = 4294967295; 
isAlphaBitm[1199] = 4294967295; isAlphaBitm[1200] = 4294967295; isAlphaBitm[1201] = 4294967295; isAlphaBitm[1202] = 4294967295; 
isAlphaBitm[1203] = 4294967295; isAlphaBitm[1204] = 4294967295; isAlphaBitm[1205] = 4294967295; isAlphaBitm[1206] = 4294967295; 
isAlphaBitm[1207] = 4294967295; isAlphaBitm[1208] = 4294967295; isAlphaBitm[1209] = 4294967295; isAlphaBitm[1210] = 4294967295; 
isAlphaBitm[1211] = 4294967295; isAlphaBitm[1212] = 4294967295; isAlphaBitm[1213] = 4294967295; isAlphaBitm[1214] = 4294967295; 
isAlphaBitm[1215] = 4294967295; isAlphaBitm[1216] = 4294967295; isAlphaBitm[1217] = 4294967295; isAlphaBitm[1218] = 4294967295; 
isAlphaBitm[1219] = 4294967295; isAlphaBitm[1220] = 4294967295; isAlphaBitm[1221] = 4294967295; isAlphaBitm[1222] = 4294967295; 
isAlphaBitm[1223] = 4294967295; isAlphaBitm[1224] = 4294967295; isAlphaBitm[1225] = 4294967295; isAlphaBitm[1226] = 4294967295; 
isAlphaBitm[1227] = 4294967295; isAlphaBitm[1228] = 4294967295; isAlphaBitm[1229] = 4294967295; isAlphaBitm[1230] = 4294967295; 
isAlphaBitm[1231] = 4294967295; isAlphaBitm[1232] = 4294967295; isAlphaBitm[1233] = 4294967295; isAlphaBitm[1234] = 4294967295; 
isAlphaBitm[1235] = 4294967295; isAlphaBitm[1236] = 4294967295; isAlphaBitm[1237] = 4294967295; isAlphaBitm[1238] = 4294967295; 
isAlphaBitm[1239] = 4294967295; isAlphaBitm[1240] = 4294967295; isAlphaBitm[1241] = 4294967295; isAlphaBitm[1242] = 4294967295; 
isAlphaBitm[1243] = 4294967295; isAlphaBitm[1244] = 4294967295; isAlphaBitm[1245] = 4294967295; isAlphaBitm[1246] = 4294967295; 
isAlphaBitm[1247] = 4294967295; isAlphaBitm[1248] = 4294967295; isAlphaBitm[1249] = 4294967295; isAlphaBitm[1250] = 4294967295; 
isAlphaBitm[1251] = 4294967295; isAlphaBitm[1252] = 4294967295; isAlphaBitm[1253] = 4294967295; isAlphaBitm[1254] = 4294967295; 
isAlphaBitm[1255] = 4294967295; isAlphaBitm[1256] = 4294967295; isAlphaBitm[1257] = 4294967295; isAlphaBitm[1258] = 4294967295; 
isAlphaBitm[1259] = 4294967295; isAlphaBitm[1260] = 4294967295; isAlphaBitm[1261] = 4294967295; isAlphaBitm[1262] = 4294967295; 
isAlphaBitm[1263] = 4294967295; isAlphaBitm[1264] = 4294967295; isAlphaBitm[1265] = 4294967295; isAlphaBitm[1266] = 4294967295; 
isAlphaBitm[1267] = 4294967295; isAlphaBitm[1268] = 4294967295; isAlphaBitm[1269] = 4294967295; isAlphaBitm[1270] = 4294967295; 
isAlphaBitm[1271] = 4294967295; isAlphaBitm[1272] = 4294967295; isAlphaBitm[1273] = 4294967295; isAlphaBitm[1274] = 4294967295; 
isAlphaBitm[1275] = 4294967295; isAlphaBitm[1276] = 4294967295; isAlphaBitm[1277] = 4294967295; isAlphaBitm[1278] = 4294967295; 
isAlphaBitm[1279] = 2047; isAlphaBitm[1280] = 4294967295; isAlphaBitm[1281] = 4294967295; isAlphaBitm[1282] = 4294967295; 
isAlphaBitm[1283] = 4294967295; isAlphaBitm[1284] = 4294967295; isAlphaBitm[1285] = 4294967295; isAlphaBitm[1286] = 4294967295; 
isAlphaBitm[1287] = 4294967295; isAlphaBitm[1288] = 4294967295; isAlphaBitm[1289] = 4294967295; isAlphaBitm[1290] = 4294967295; 
isAlphaBitm[1291] = 4294967295; isAlphaBitm[1292] = 4294967295; isAlphaBitm[1293] = 4294967295; isAlphaBitm[1294] = 4294967295; 
isAlphaBitm[1295] = 4294967295; isAlphaBitm[1296] = 4294967295; isAlphaBitm[1297] = 4294967295; isAlphaBitm[1298] = 4294967295; 
isAlphaBitm[1299] = 4294967295; isAlphaBitm[1300] = 4294967295; isAlphaBitm[1301] = 4294967295; isAlphaBitm[1302] = 4294967295; 
isAlphaBitm[1303] = 4294967295; isAlphaBitm[1304] = 4294967295; isAlphaBitm[1305] = 4294967295; isAlphaBitm[1306] = 4294967295; 
isAlphaBitm[1307] = 4294967295; isAlphaBitm[1308] = 4294967295; isAlphaBitm[1309] = 4294967295; isAlphaBitm[1310] = 4294967295; 
isAlphaBitm[1311] = 4294967295; isAlphaBitm[1312] = 4294967295; isAlphaBitm[1313] = 4294967295; isAlphaBitm[1314] = 4294967295; 
isAlphaBitm[1315] = 4294967295; isAlphaBitm[1316] = 8191; isAlphaBitm[1318] = 4294901760; isAlphaBitm[1319] = 1073741823; 
isAlphaBitm[1320] = 4294967295; isAlphaBitm[1321] = 4294967295; isAlphaBitm[1322] = 4294967295; isAlphaBitm[1323] = 4294967295; 
isAlphaBitm[1324] = 4294967295; isAlphaBitm[1325] = 4294967295; isAlphaBitm[1326] = 4294967295; isAlphaBitm[1327] = 4294967295; 
isAlphaBitm[1328] = 4294909951; isAlphaBitm[1329] = 3072; isAlphaBitm[1330] = 4294967295; isAlphaBitm[1331] = 2414903295; 
isAlphaBitm[1332] = 4294967295; isAlphaBitm[1333] = 4294967295; isAlphaBitm[1334] = 4294967295; isAlphaBitm[1335] = 65535; 
isAlphaBitm[1336] = 4286578688; isAlphaBitm[1337] = 4294967292; isAlphaBitm[1338] = 4294967295; isAlphaBitm[1339] = 4294967295; 
isAlphaBitm[1340] = 4294965759; isAlphaBitm[1341] = 16744447; isAlphaBitm[1343] = 4286578688; isAlphaBitm[1344] = 4294965179; 
isAlphaBitm[1345] = 255; isAlphaBitm[1346] = 4294967295; isAlphaBitm[1347] = 1048575; isAlphaBitm[1348] = 4294967295; 
isAlphaBitm[1349] = 4294967295; isAlphaBitm[1350] = 47; isAlphaBitm[1351] = 687603712; isAlphaBitm[1352] = 4294966272; 
isAlphaBitm[1353] = 4294903807; isAlphaBitm[1354] = 524287; isAlphaBitm[1355] = 536870911; isAlphaBitm[1356] = 4294967295; 
isAlphaBitm[1357] = 4294443007; isAlphaBitm[1358] = 32768; isAlphaBitm[1359] = 2080440287; isAlphaBitm[1360] = 4294967295; 
isAlphaBitm[1361] = 8388607; isAlphaBitm[1362] = 16383; isAlphaBitm[1363] = 3296722943; isAlphaBitm[1364] = 4294967295; 
isAlphaBitm[1365] = 2147483647; isAlphaBitm[1366] = 939524101; isAlphaBitm[1367] = 3997695; isAlphaBitm[1368] = 8289918; 
isAlphaBitm[1369] = 4294934399; isAlphaBitm[1370] = 4160749567; isAlphaBitm[1371] = 4294901823; isAlphaBitm[1372] = 4294967295; 
isAlphaBitm[1373] = 4294967295; isAlphaBitm[1374] = 4294967295; isAlphaBitm[1375] = 2047; isAlphaBitm[1376] = 4294967295; 
isAlphaBitm[1377] = 4294967295; isAlphaBitm[1378] = 4294967295; isAlphaBitm[1379] = 4294967295; isAlphaBitm[1380] = 4294967295; 
isAlphaBitm[1381] = 4294967295; isAlphaBitm[1382] = 4294967295; isAlphaBitm[1383] = 4294967295; isAlphaBitm[1384] = 4294967295; 
isAlphaBitm[1385] = 4294967295; isAlphaBitm[1386] = 4294967295; isAlphaBitm[1387] = 4294967295; isAlphaBitm[1388] = 4294967295; 
isAlphaBitm[1389] = 4294967295; isAlphaBitm[1390] = 4294967295; isAlphaBitm[1391] = 4294967295; isAlphaBitm[1392] = 4294967295; 
isAlphaBitm[1393] = 4294967295; isAlphaBitm[1394] = 4294967295; isAlphaBitm[1395] = 4294967295; isAlphaBitm[1396] = 4294967295; 
isAlphaBitm[1397] = 4294967295; isAlphaBitm[1398] = 4294967295; isAlphaBitm[1399] = 4294967295; isAlphaBitm[1400] = 4294967295; 
isAlphaBitm[1401] = 4294967295; isAlphaBitm[1402] = 4294967295; isAlphaBitm[1403] = 4294967295; isAlphaBitm[1404] = 4294967295; 
isAlphaBitm[1405] = 4294967295; isAlphaBitm[1406] = 4294967295; isAlphaBitm[1407] = 4294967295; isAlphaBitm[1408] = 4294967295; 
isAlphaBitm[1409] = 4294967295; isAlphaBitm[1410] = 4294967295; isAlphaBitm[1411] = 4294967295; isAlphaBitm[1412] = 4294967295; 
isAlphaBitm[1413] = 4294967295; isAlphaBitm[1414] = 4294967295; isAlphaBitm[1415] = 4294967295; isAlphaBitm[1416] = 4294967295; 
isAlphaBitm[1417] = 4294967295; isAlphaBitm[1418] = 4294967295; isAlphaBitm[1419] = 4294967295; isAlphaBitm[1420] = 4294967295; 
isAlphaBitm[1421] = 4294967295; isAlphaBitm[1422] = 4294967295; isAlphaBitm[1423] = 4294967295; isAlphaBitm[1424] = 4294967295; 
isAlphaBitm[1425] = 4294967295; isAlphaBitm[1426] = 4294967295; isAlphaBitm[1427] = 4294967295; isAlphaBitm[1428] = 4294967295; 
isAlphaBitm[1429] = 4294967295; isAlphaBitm[1430] = 4294967295; isAlphaBitm[1431] = 4294967295; isAlphaBitm[1432] = 4294967295; 
isAlphaBitm[1433] = 4294967295; isAlphaBitm[1434] = 4294967295; isAlphaBitm[1435] = 4294967295; isAlphaBitm[1436] = 4294967295; 
isAlphaBitm[1437] = 4294967295; isAlphaBitm[1438] = 4294967295; isAlphaBitm[1439] = 4294967295; isAlphaBitm[1440] = 4294967295; 
isAlphaBitm[1441] = 4294967295; isAlphaBitm[1442] = 4294967295; isAlphaBitm[1443] = 4294967295; isAlphaBitm[1444] = 4294967295; 
isAlphaBitm[1445] = 4294967295; isAlphaBitm[1446] = 4294967295; isAlphaBitm[1447] = 4294967295; isAlphaBitm[1448] = 4294967295; 
isAlphaBitm[1449] = 4294967295; isAlphaBitm[1450] = 4294967295; isAlphaBitm[1451] = 4294967295; isAlphaBitm[1452] = 4294967295; 
isAlphaBitm[1453] = 4294967295; isAlphaBitm[1454] = 4294967295; isAlphaBitm[1455] = 4294967295; isAlphaBitm[1456] = 4294967295; 
isAlphaBitm[1457] = 4294967295; isAlphaBitm[1458] = 4294967295; isAlphaBitm[1459] = 4294967295; isAlphaBitm[1460] = 4294967295; 
isAlphaBitm[1461] = 4294967295; isAlphaBitm[1462] = 4294967295; isAlphaBitm[1463] = 4294967295; isAlphaBitm[1464] = 4294967295; 
isAlphaBitm[1465] = 4294967295; isAlphaBitm[1466] = 4294967295; isAlphaBitm[1467] = 4294967295; isAlphaBitm[1468] = 4294967295; 
isAlphaBitm[1469] = 4294967295; isAlphaBitm[1470] = 4294967295; isAlphaBitm[1471] = 4294967295; isAlphaBitm[1472] = 4294967295; 
isAlphaBitm[1473] = 4294967295; isAlphaBitm[1474] = 4294967295; isAlphaBitm[1475] = 4294967295; isAlphaBitm[1476] = 4294967295; 
isAlphaBitm[1477] = 4294967295; isAlphaBitm[1478] = 4294967295; isAlphaBitm[1479] = 4294967295; isAlphaBitm[1480] = 4294967295; 
isAlphaBitm[1481] = 4294967295; isAlphaBitm[1482] = 4294967295; isAlphaBitm[1483] = 4294967295; isAlphaBitm[1484] = 4294967295; 
isAlphaBitm[1485] = 4294967295; isAlphaBitm[1486] = 4294967295; isAlphaBitm[1487] = 4294967295; isAlphaBitm[1488] = 4294967295; 
isAlphaBitm[1489] = 4294967295; isAlphaBitm[1490] = 4294967295; isAlphaBitm[1491] = 4294967295; isAlphaBitm[1492] = 4294967295; 
isAlphaBitm[1493] = 4294967295; isAlphaBitm[1494] = 4294967295; isAlphaBitm[1495] = 4294967295; isAlphaBitm[1496] = 4294967295; 
isAlphaBitm[1497] = 4294967295; isAlphaBitm[1498] = 4294967295; isAlphaBitm[1499] = 4294967295; isAlphaBitm[1500] = 4294967295; 
isAlphaBitm[1501] = 4294967295; isAlphaBitm[1502] = 4294967295; isAlphaBitm[1503] = 4294967295; isAlphaBitm[1504] = 4294967295; 
isAlphaBitm[1505] = 4294967295; isAlphaBitm[1506] = 4294967295; isAlphaBitm[1507] = 4294967295; isAlphaBitm[1508] = 4294967295; 
isAlphaBitm[1509] = 4294967295; isAlphaBitm[1510] = 4294967295; isAlphaBitm[1511] = 4294967295; isAlphaBitm[1512] = 4294967295; 
isAlphaBitm[1513] = 4294967295; isAlphaBitm[1514] = 4294967295; isAlphaBitm[1515] = 4294967295; isAlphaBitm[1516] = 4294967295; 
isAlphaBitm[1517] = 4294967295; isAlphaBitm[1518] = 4294967295; isAlphaBitm[1519] = 4294967295; isAlphaBitm[1520] = 4294967295; 
isAlphaBitm[1521] = 4294967295; isAlphaBitm[1522] = 4294967295; isAlphaBitm[1523] = 4294967295; isAlphaBitm[1524] = 4294967295; 
isAlphaBitm[1525] = 4294967295; isAlphaBitm[1526] = 4294967295; isAlphaBitm[1527] = 4294967295; isAlphaBitm[1528] = 4294967295; 
isAlphaBitm[1529] = 4294967295; isAlphaBitm[1530] = 4294967295; isAlphaBitm[1531] = 4294967295; isAlphaBitm[1532] = 4294967295; 
isAlphaBitm[1533] = 4294967295; isAlphaBitm[1534] = 4294967295; isAlphaBitm[1535] = 4294967295; isAlphaBitm[1536] = 4294967295; 
isAlphaBitm[1537] = 4294967295; isAlphaBitm[1538] = 4294967295; isAlphaBitm[1539] = 4294967295; isAlphaBitm[1540] = 4294967295; 
isAlphaBitm[1541] = 4294967295; isAlphaBitm[1542] = 4294967295; isAlphaBitm[1543] = 4294967295; isAlphaBitm[1544] = 4294967295; 
isAlphaBitm[1545] = 4294967295; isAlphaBitm[1546] = 4294967295; isAlphaBitm[1547] = 4294967295; isAlphaBitm[1548] = 4294967295; 
isAlphaBitm[1549] = 4294967295; isAlphaBitm[1550] = 4294967295; isAlphaBitm[1551] = 4294967295; isAlphaBitm[1552] = 4294967295; 
isAlphaBitm[1553] = 4294967295; isAlphaBitm[1554] = 4294967295; isAlphaBitm[1555] = 4294967295; isAlphaBitm[1556] = 4294967295; 
isAlphaBitm[1557] = 4294967295; isAlphaBitm[1558] = 4294967295; isAlphaBitm[1559] = 4294967295; isAlphaBitm[1560] = 4294967295; 
isAlphaBitm[1561] = 4294967295; isAlphaBitm[1562] = 4294967295; isAlphaBitm[1563] = 4294967295; isAlphaBitm[1564] = 4294967295; 
isAlphaBitm[1565] = 4294967295; isAlphaBitm[1566] = 4294967295; isAlphaBitm[1567] = 4294967295; isAlphaBitm[1568] = 4294967295; 
isAlphaBitm[1569] = 4294967295; isAlphaBitm[1570] = 4294967295; isAlphaBitm[1571] = 4294967295; isAlphaBitm[1572] = 4294967295; 
isAlphaBitm[1573] = 4294967295; isAlphaBitm[1574] = 4294967295; isAlphaBitm[1575] = 4294967295; isAlphaBitm[1576] = 4294967295; 
isAlphaBitm[1577] = 4294967295; isAlphaBitm[1578] = 4294967295; isAlphaBitm[1579] = 4294967295; isAlphaBitm[1580] = 4294967295; 
isAlphaBitm[1581] = 4294967295; isAlphaBitm[1582] = 4294967295; isAlphaBitm[1583] = 4294967295; isAlphaBitm[1584] = 4294967295; 
isAlphaBitm[1585] = 4294967295; isAlphaBitm[1586] = 4294967295; isAlphaBitm[1587] = 4294967295; isAlphaBitm[1588] = 4294967295; 
isAlphaBitm[1589] = 4294967295; isAlphaBitm[1590] = 4294967295; isAlphaBitm[1591] = 4294967295; isAlphaBitm[1592] = 4294967295; 
isAlphaBitm[1593] = 4294967295; isAlphaBitm[1594] = 4294967295; isAlphaBitm[1595] = 4294967295; isAlphaBitm[1596] = 4294967295; 
isAlphaBitm[1597] = 4294967295; isAlphaBitm[1598] = 4294967295; isAlphaBitm[1599] = 4294967295; isAlphaBitm[1600] = 4294967295; 
isAlphaBitm[1601] = 4294967295; isAlphaBitm[1602] = 4294967295; isAlphaBitm[1603] = 4294967295; isAlphaBitm[1604] = 4294967295; 
isAlphaBitm[1605] = 4294967295; isAlphaBitm[1606] = 4294967295; isAlphaBitm[1607] = 4294967295; isAlphaBitm[1608] = 4294967295; 
isAlphaBitm[1609] = 4294967295; isAlphaBitm[1610] = 4294967295; isAlphaBitm[1611] = 4294967295; isAlphaBitm[1612] = 4294967295; 
isAlphaBitm[1613] = 4294967295; isAlphaBitm[1614] = 4294967295; isAlphaBitm[1615] = 4294967295; isAlphaBitm[1616] = 4294967295; 
isAlphaBitm[1617] = 4294967295; isAlphaBitm[1618] = 4294967295; isAlphaBitm[1619] = 4294967295; isAlphaBitm[1620] = 4294967295; 
isAlphaBitm[1621] = 4294967295; isAlphaBitm[1622] = 4294967295; isAlphaBitm[1623] = 4294967295; isAlphaBitm[1624] = 4294967295; 
isAlphaBitm[1625] = 4294967295; isAlphaBitm[1626] = 4294967295; isAlphaBitm[1627] = 4294967295; isAlphaBitm[1628] = 4294967295; 
isAlphaBitm[1629] = 4294967295; isAlphaBitm[1630] = 4294967295; isAlphaBitm[1631] = 4294967295; isAlphaBitm[1632] = 4294967295; 
isAlphaBitm[1633] = 4294967295; isAlphaBitm[1634] = 4294967295; isAlphaBitm[1635] = 4294967295; isAlphaBitm[1636] = 4294967295; 
isAlphaBitm[1637] = 4294967295; isAlphaBitm[1638] = 4294967295; isAlphaBitm[1639] = 4294967295; isAlphaBitm[1640] = 4294967295; 
isAlphaBitm[1641] = 4294967295; isAlphaBitm[1642] = 4294967295; isAlphaBitm[1643] = 4294967295; isAlphaBitm[1644] = 4294967295; 
isAlphaBitm[1645] = 4294967295; isAlphaBitm[1646] = 4294967295; isAlphaBitm[1647] = 4294967295; isAlphaBitm[1648] = 4294967295; 
isAlphaBitm[1649] = 4294967295; isAlphaBitm[1650] = 4294967295; isAlphaBitm[1651] = 4294967295; isAlphaBitm[1652] = 4294967295; 
isAlphaBitm[1653] = 4294967295; isAlphaBitm[1654] = 4294967295; isAlphaBitm[1655] = 4294967295; isAlphaBitm[1656] = 4294967295; 
isAlphaBitm[1657] = 4294967295; isAlphaBitm[1658] = 4294967295; isAlphaBitm[1659] = 4294967295; isAlphaBitm[1660] = 4294967295; 
isAlphaBitm[1661] = 4294967295; isAlphaBitm[1662] = 4294967295; isAlphaBitm[1663] = 4294967295; isAlphaBitm[1664] = 4294967295; 
isAlphaBitm[1665] = 4294967295; isAlphaBitm[1666] = 4294967295; isAlphaBitm[1667] = 4294967295; isAlphaBitm[1668] = 4294967295; 
isAlphaBitm[1669] = 4294967295; isAlphaBitm[1670] = 4294967295; isAlphaBitm[1671] = 4294967295; isAlphaBitm[1672] = 4294967295; 
isAlphaBitm[1673] = 4294967295; isAlphaBitm[1674] = 4294967295; isAlphaBitm[1675] = 4294967295; isAlphaBitm[1676] = 4294967295; 
isAlphaBitm[1677] = 4294967295; isAlphaBitm[1678] = 4294967295; isAlphaBitm[1679] = 4294967295; isAlphaBitm[1680] = 4294967295; 
isAlphaBitm[1681] = 4294967295; isAlphaBitm[1682] = 4294967295; isAlphaBitm[1683] = 4294967295; isAlphaBitm[1684] = 4294967295; 
isAlphaBitm[1685] = 4294967295; isAlphaBitm[1686] = 4294967295; isAlphaBitm[1687] = 4294967295; isAlphaBitm[1688] = 4294967295; 
isAlphaBitm[1689] = 4294967295; isAlphaBitm[1690] = 4294967295; isAlphaBitm[1691] = 4294967295; isAlphaBitm[1692] = 4294967295; 
isAlphaBitm[1693] = 4294967295; isAlphaBitm[1694] = 4294967295; isAlphaBitm[1695] = 4294967295; isAlphaBitm[1696] = 4294967295; 
isAlphaBitm[1697] = 4294967295; isAlphaBitm[1698] = 4294967295; isAlphaBitm[1699] = 4294967295; isAlphaBitm[1700] = 4294967295; 
isAlphaBitm[1701] = 4294967295; isAlphaBitm[1702] = 4294967295; isAlphaBitm[1703] = 4294967295; isAlphaBitm[1704] = 4294967295; 
isAlphaBitm[1705] = 4294967295; isAlphaBitm[1706] = 4294967295; isAlphaBitm[1707] = 4294967295; isAlphaBitm[1708] = 4294967295; 
isAlphaBitm[1709] = 4294967295; isAlphaBitm[1710] = 4294967295; isAlphaBitm[1711] = 4294967295; isAlphaBitm[1712] = 4294967295; 
isAlphaBitm[1713] = 4294967295; isAlphaBitm[1714] = 4294967295; isAlphaBitm[1715] = 4294967295; isAlphaBitm[1716] = 4294967295; 
isAlphaBitm[1717] = 4294967295; isAlphaBitm[1718] = 4294967295; isAlphaBitm[1719] = 4294967295; isAlphaBitm[1720] = 4294967295; 
isAlphaBitm[1721] = 4294967295; isAlphaBitm[1722] = 4294967295; isAlphaBitm[1723] = 4294967295; isAlphaBitm[1724] = 4294967295; 
isAlphaBitm[1725] = 4294901775; isAlphaBitm[1726] = 4294965375; isAlphaBitm[1727] = 268435455; isAlphaBitm[1992] = 4294967295; 
isAlphaBitm[1993] = 4294967295; isAlphaBitm[1994] = 4294967295; isAlphaBitm[1995] = 4294967295; isAlphaBitm[1996] = 4294967295; 
isAlphaBitm[1997] = 4294967295; isAlphaBitm[1998] = 4294967295; isAlphaBitm[1999] = 4294967295; isAlphaBitm[2000] = 4294967295; 
isAlphaBitm[2001] = 4294967295; isAlphaBitm[2002] = 4294967295; isAlphaBitm[2003] = 4294918143; isAlphaBitm[2004] = 4294967295; 
isAlphaBitm[2005] = 4294967295; isAlphaBitm[2006] = 67108863; isAlphaBitm[2008] = 3774349439; isAlphaBitm[2009] = 1602223615; 
isAlphaBitm[2010] = 4294967259; isAlphaBitm[2011] = 4294967295; isAlphaBitm[2012] = 4294967295; isAlphaBitm[2013] = 262143; 
isAlphaBitm[2014] = 4294443008; isAlphaBitm[2015] = 4294967295; isAlphaBitm[2016] = 4294967295; isAlphaBitm[2017] = 4294967295; 
isAlphaBitm[2018] = 4294967295; isAlphaBitm[2019] = 4294967295; isAlphaBitm[2020] = 4294967295; isAlphaBitm[2021] = 4294967295; 
isAlphaBitm[2022] = 4294967295; isAlphaBitm[2023] = 4294967295; isAlphaBitm[2024] = 4294967295; isAlphaBitm[2025] = 1073741823; 
isAlphaBitm[2026] = 4294901760; isAlphaBitm[2027] = 4294967295; isAlphaBitm[2028] = 4294770687; isAlphaBitm[2029] = 4294967295; 
isAlphaBitm[2030] = 255; isAlphaBitm[2031] = 268369920; isAlphaBitm[2035] = 4292804608; isAlphaBitm[2036] = 4294967295; 
isAlphaBitm[2037] = 4294967295; isAlphaBitm[2038] = 4294967295; isAlphaBitm[2039] = 536870911; isAlphaBitm[2041] = 134217726; 
isAlphaBitm[2042] = 134217726; isAlphaBitm[2043] = 4294967232; isAlphaBitm[2044] = 4294967295; isAlphaBitm[2045] = 2147483647; 
isAlphaBitm[2046] = 486341884; isAlphaBitm[2048] = 4294963199; isAlphaBitm[2049] = 3087007615; isAlphaBitm[2050] = 1073692671; 
isAlphaBitm[2052] = 4294967295; isAlphaBitm[2053] = 4294967295; isAlphaBitm[2054] = 4294967295; isAlphaBitm[2055] = 134217727; 
isAlphaBitm[2058] = 4294967295; isAlphaBitm[2059] = 2097151; isAlphaBitm[2068] = 536870911; isAlphaBitm[2069] = 4294967295; 
isAlphaBitm[2070] = 131071; isAlphaBitm[2072] = 4294967295; isAlphaBitm[2073] = 4294959104; isAlphaBitm[2074] = 4294903807; 
isAlphaBitm[2075] = 134217727; isAlphaBitm[2076] = 1073741823; isAlphaBitm[2077] = 4294967295; isAlphaBitm[2078] = 4128527; 
isAlphaBitm[2080] = 4294967295; isAlphaBitm[2081] = 4294967295; isAlphaBitm[2082] = 4294967295; isAlphaBitm[2083] = 4294967295; 
isAlphaBitm[2084] = 1073741823; isAlphaBitm[2085] = 4294901760; isAlphaBitm[2086] = 4279238655; isAlphaBitm[2087] = 268435455; 
isAlphaBitm[2088] = 4294967295; isAlphaBitm[2089] = 4294902015; isAlphaBitm[2090] = 4294967295; isAlphaBitm[2091] = 15; 
isAlphaBitm[2096] = 4294967295; isAlphaBitm[2097] = 4294967295; isAlphaBitm[2098] = 4294967295; isAlphaBitm[2099] = 4294967295; 
isAlphaBitm[2100] = 4294967295; isAlphaBitm[2101] = 4294967295; isAlphaBitm[2102] = 4294967295; isAlphaBitm[2103] = 4294967295; 
isAlphaBitm[2104] = 4294967295; isAlphaBitm[2105] = 8388607; isAlphaBitm[2106] = 4194303; isAlphaBitm[2107] = 255; 
isAlphaBitm[2112] = 4294966591; isAlphaBitm[2113] = 2445279231; isAlphaBitm[2114] = 4194303; isAlphaBitm[2115] = 8388607; 
isAlphaBitm[2116] = 2147483647; isAlphaBitm[2119] = 3670015; isAlphaBitm[2120] = 4194303; isAlphaBitm[2121] = 67108863; 
isAlphaBitm[2124] = 4294967295; isAlphaBitm[2125] = 3238002687; isAlphaBitm[2128] = 4277137519; isAlphaBitm[2129] = 1048575; 
isAlphaBitm[2131] = 536870911; isAlphaBitm[2132] = 536870911; isAlphaBitm[2134] = 4294967039; isAlphaBitm[2135] = 31; 
isAlphaBitm[2136] = 4294967295; isAlphaBitm[2137] = 4194303; isAlphaBitm[2138] = 4194303; isAlphaBitm[2139] = 524287; 
isAlphaBitm[2140] = 262143; isAlphaBitm[2144] = 4294967295; isAlphaBitm[2145] = 4294967295; isAlphaBitm[2146] = 511; 
isAlphaBitm[2148] = 4294967295; isAlphaBitm[2149] = 524287; isAlphaBitm[2150] = 4294967295; isAlphaBitm[2151] = 524287; 
isAlphaBitm[2176] = 4294967295; isAlphaBitm[2177] = 4294967295; isAlphaBitm[2178] = 63; isAlphaBitm[2180] = 4294967292; 
isAlphaBitm[2181] = 33554431; isAlphaBitm[2182] = 4294901760; isAlphaBitm[2183] = 511; isAlphaBitm[2184] = 4294967295; 
isAlphaBitm[2185] = 524287; isAlphaBitm[2186] = 4294901760; isAlphaBitm[2187] = 4718591; isAlphaBitm[2188] = 4294967295; 
isAlphaBitm[2189] = 4294967295; isAlphaBitm[2190] = 335544350; isAlphaBitm[2192] = 4294705151; isAlphaBitm[2193] = 1084227583; 
isAlphaBitm[2196] = 3221208447; isAlphaBitm[2197] = 4294902271; isAlphaBitm[2198] = 4294967295; isAlphaBitm[2199] = 511; 
isAlphaBitm[2200] = 4294549487; isAlphaBitm[2201] = 3824025087; isAlphaBitm[2202] = 3766557087; isAlphaBitm[2203] = 15; 
isAlphaBitm[2208] = 4294967295; isAlphaBitm[2209] = 4294967295; isAlphaBitm[2210] = 1979; isAlphaBitm[2212] = 4294967295; 
isAlphaBitm[2213] = 4294967295; isAlphaBitm[2214] = 179; isAlphaBitm[2220] = 4294967295; isAlphaBitm[2221] = 2134900735; 
isAlphaBitm[2222] = 1056964608; isAlphaBitm[2224] = 4294967295; isAlphaBitm[2225] = 2147483647; isAlphaBitm[2226] = 17; 
isAlphaBitm[2228] = 4294967295; isAlphaBitm[2229] = 4194303; isAlphaBitm[2232] = 3825205247; isAlphaBitm[2233] = 2047; 
isAlphaBitm[2245] = 4294967295; isAlphaBitm[2246] = 4294967295; isAlphaBitm[2247] = 2147483648; isAlphaBitm[2256] = 4294967295; 
isAlphaBitm[2257] = 2145910783; isAlphaBitm[2258] = 4294901760; isAlphaBitm[2259] = 4294967295; isAlphaBitm[2260] = 16777167; 
isAlphaBitm[2262] = 4294967295; isAlphaBitm[2263] = 33554431; isAlphaBitm[2272] = 4294966783; isAlphaBitm[2273] = 2139095039; 
isAlphaBitm[2274] = 1; isAlphaBitm[2275] = 4294705152; isAlphaBitm[2276] = 4294770687; isAlphaBitm[2277] = 8388351; 
isAlphaBitm[2280] = 4294966143; isAlphaBitm[2281] = 3028287487; isAlphaBitm[2282] = 203; isAlphaBitm[2304] = 4294967295; 
isAlphaBitm[2305] = 4294967295; isAlphaBitm[2306] = 4294967295; isAlphaBitm[2307] = 4294967295; isAlphaBitm[2308] = 4294967295; 
isAlphaBitm[2309] = 4294967295; isAlphaBitm[2310] = 4294967295; isAlphaBitm[2311] = 4294967295; isAlphaBitm[2312] = 4294967295; 
isAlphaBitm[2313] = 4294967295; isAlphaBitm[2314] = 4294967295; isAlphaBitm[2315] = 4294967295; isAlphaBitm[2316] = 4294967295; 
isAlphaBitm[2317] = 4294967295; isAlphaBitm[2318] = 4294967295; isAlphaBitm[2319] = 4294967295; isAlphaBitm[2320] = 4294967295; 
isAlphaBitm[2321] = 4294967295; isAlphaBitm[2322] = 4294967295; isAlphaBitm[2323] = 4294967295; isAlphaBitm[2324] = 4294967295; 
isAlphaBitm[2325] = 4294967295; isAlphaBitm[2326] = 4294967295; isAlphaBitm[2327] = 4294967295; isAlphaBitm[2328] = 4294967295; 
isAlphaBitm[2329] = 4294967295; isAlphaBitm[2330] = 4294967295; isAlphaBitm[2331] = 4294967295; isAlphaBitm[2332] = 67108863; 
isAlphaBitm[2336] = 4294967295; isAlphaBitm[2337] = 4294967295; isAlphaBitm[2338] = 4294967295; isAlphaBitm[2339] = 32767; 
isAlphaBitm[2340] = 4294967295; isAlphaBitm[2341] = 4294967295; isAlphaBitm[2342] = 4294967295; isAlphaBitm[2343] = 4294967295; 
isAlphaBitm[2344] = 4294967295; isAlphaBitm[2345] = 4294967295; isAlphaBitm[2346] = 15; isAlphaBitm[2432] = 4294967295; 
isAlphaBitm[2433] = 4294967295; isAlphaBitm[2434] = 4294967295; isAlphaBitm[2435] = 4294967295; isAlphaBitm[2436] = 4294967295; 
isAlphaBitm[2437] = 4294967295; isAlphaBitm[2438] = 4294967295; isAlphaBitm[2439] = 4294967295; isAlphaBitm[2440] = 4294967295; 
isAlphaBitm[2441] = 4294967295; isAlphaBitm[2442] = 4294967295; isAlphaBitm[2443] = 4294967295; isAlphaBitm[2444] = 4294967295; 
isAlphaBitm[2445] = 4294967295; isAlphaBitm[2446] = 4294967295; isAlphaBitm[2447] = 4294967295; isAlphaBitm[2448] = 4294967295; 
isAlphaBitm[2449] = 4294967295; isAlphaBitm[2450] = 4294967295; isAlphaBitm[2451] = 4294967295; isAlphaBitm[2452] = 4294967295; 
isAlphaBitm[2453] = 4294967295; isAlphaBitm[2454] = 4294967295; isAlphaBitm[2455] = 4294967295; isAlphaBitm[2456] = 4294967295; 
isAlphaBitm[2457] = 4294967295; isAlphaBitm[2458] = 4294967295; isAlphaBitm[2459] = 4294967295; isAlphaBitm[2460] = 4294967295; 
isAlphaBitm[2461] = 4294967295; isAlphaBitm[2462] = 4294967295; isAlphaBitm[2463] = 4294967295; isAlphaBitm[2464] = 4294967295; 
isAlphaBitm[2465] = 32767; isAlphaBitm[2592] = 4294967295; isAlphaBitm[2593] = 4294967295; isAlphaBitm[2594] = 4294967295; 
isAlphaBitm[2595] = 4294967295; isAlphaBitm[2596] = 4294967295; isAlphaBitm[2597] = 4294967295; isAlphaBitm[2598] = 4294967295; 
isAlphaBitm[2599] = 4294967295; isAlphaBitm[2600] = 4294967295; isAlphaBitm[2601] = 4294967295; isAlphaBitm[2602] = 4294967295; 
isAlphaBitm[2603] = 4294967295; isAlphaBitm[2604] = 4294967295; isAlphaBitm[2605] = 4294967295; isAlphaBitm[2606] = 4294967295; 
isAlphaBitm[2607] = 4294967295; isAlphaBitm[2608] = 4294967295; isAlphaBitm[2609] = 4294967295; isAlphaBitm[2610] = 127; 
isAlphaBitm[2880] = 4294967295; isAlphaBitm[2881] = 4294967295; isAlphaBitm[2882] = 4294967295; isAlphaBitm[2883] = 4294967295; 
isAlphaBitm[2884] = 4294967295; isAlphaBitm[2885] = 4294967295; isAlphaBitm[2886] = 4294967295; isAlphaBitm[2887] = 4294967295; 
isAlphaBitm[2888] = 4294967295; isAlphaBitm[2889] = 4294967295; isAlphaBitm[2890] = 4294967295; isAlphaBitm[2891] = 4294967295; 
isAlphaBitm[2892] = 4294967295; isAlphaBitm[2893] = 4294967295; isAlphaBitm[2894] = 4294967295; isAlphaBitm[2895] = 4294967295; 
isAlphaBitm[2896] = 4294967295; isAlphaBitm[2897] = 33554431; isAlphaBitm[2898] = 2147483647; isAlphaBitm[2902] = 4294901760; 
isAlphaBitm[2903] = 16383; isAlphaBitm[2904] = 4294967295; isAlphaBitm[2905] = 8388607; isAlphaBitm[2906] = 15; 
isAlphaBitm[2907] = 3774873592; isAlphaBitm[2908] = 65535; isAlphaBitm[2936] = 4294967295; isAlphaBitm[2937] = 4294967295; 
isAlphaBitm[2938] = 4294901791; isAlphaBitm[2939] = 2147483647; isAlphaBitm[2940] = 4294443008; isAlphaBitm[2943] = 3; 
isAlphaBitm[2944] = 4294967295; isAlphaBitm[2945] = 4294967295; isAlphaBitm[2946] = 4294967295; isAlphaBitm[2947] = 4294967295; 
isAlphaBitm[2948] = 4294967295; isAlphaBitm[2949] = 4294967295; isAlphaBitm[2950] = 4294967295; isAlphaBitm[2951] = 4294967295; 
isAlphaBitm[2952] = 4294967295; isAlphaBitm[2953] = 4294967295; isAlphaBitm[2954] = 4294967295; isAlphaBitm[2955] = 4294967295; 
isAlphaBitm[2956] = 4294967295; isAlphaBitm[2957] = 4294967295; isAlphaBitm[2958] = 4294967295; isAlphaBitm[2959] = 4294967295; 
isAlphaBitm[2960] = 4294967295; isAlphaBitm[2961] = 4294967295; isAlphaBitm[2962] = 4294967295; isAlphaBitm[2963] = 4294967295; 
isAlphaBitm[2964] = 4294967295; isAlphaBitm[2965] = 4294967295; isAlphaBitm[2966] = 4294967295; isAlphaBitm[2967] = 4294967295; 
isAlphaBitm[2968] = 4294967295; isAlphaBitm[2969] = 4294967295; isAlphaBitm[2970] = 4294967295; isAlphaBitm[2971] = 4294967295; 
isAlphaBitm[2972] = 4294967295; isAlphaBitm[2973] = 4294967295; isAlphaBitm[2974] = 4294967295; isAlphaBitm[2975] = 4294967295; 
isAlphaBitm[2976] = 4294967295; isAlphaBitm[2977] = 4294967295; isAlphaBitm[2978] = 4294967295; isAlphaBitm[2979] = 4294967295; 
isAlphaBitm[2980] = 4294967295; isAlphaBitm[2981] = 4294967295; isAlphaBitm[2982] = 4294967295; isAlphaBitm[2983] = 4294967295; 
isAlphaBitm[2984] = 4294967295; isAlphaBitm[2985] = 4294967295; isAlphaBitm[2986] = 4294967295; isAlphaBitm[2987] = 4294967295; 
isAlphaBitm[2988] = 4294967295; isAlphaBitm[2989] = 4294967295; isAlphaBitm[2990] = 4294967295; isAlphaBitm[2991] = 4294967295; 
isAlphaBitm[2992] = 4294967295; isAlphaBitm[2993] = 4294967295; isAlphaBitm[2994] = 4294967295; isAlphaBitm[2995] = 4294967295; 
isAlphaBitm[2996] = 4294967295; isAlphaBitm[2997] = 4294967295; isAlphaBitm[2998] = 4294967295; isAlphaBitm[2999] = 4294967295; 
isAlphaBitm[3000] = 4294967295; isAlphaBitm[3001] = 4294967295; isAlphaBitm[3002] = 4294967295; isAlphaBitm[3003] = 4294967295; 
isAlphaBitm[3004] = 4294967295; isAlphaBitm[3005] = 4294967295; isAlphaBitm[3006] = 4294967295; isAlphaBitm[3007] = 4294967295; 
isAlphaBitm[3008] = 4294967295; isAlphaBitm[3009] = 4294967295; isAlphaBitm[3010] = 4294967295; isAlphaBitm[3011] = 4294967295; 
isAlphaBitm[3012] = 4294967295; isAlphaBitm[3013] = 4294967295; isAlphaBitm[3014] = 4294967295; isAlphaBitm[3015] = 4294967295; 
isAlphaBitm[3016] = 4294967295; isAlphaBitm[3017] = 4294967295; isAlphaBitm[3018] = 4294967295; isAlphaBitm[3019] = 4294967295; 
isAlphaBitm[3020] = 4294967295; isAlphaBitm[3021] = 4294967295; isAlphaBitm[3022] = 4294967295; isAlphaBitm[3023] = 4294967295; 
isAlphaBitm[3024] = 4294967295; isAlphaBitm[3025] = 4294967295; isAlphaBitm[3026] = 4294967295; isAlphaBitm[3027] = 4294967295; 
isAlphaBitm[3028] = 4294967295; isAlphaBitm[3029] = 4294967295; isAlphaBitm[3030] = 4294967295; isAlphaBitm[3031] = 4294967295; 
isAlphaBitm[3032] = 4294967295; isAlphaBitm[3033] = 4294967295; isAlphaBitm[3034] = 4294967295; isAlphaBitm[3035] = 4294967295; 
isAlphaBitm[3036] = 4294967295; isAlphaBitm[3037] = 4294967295; isAlphaBitm[3038] = 4294967295; isAlphaBitm[3039] = 4294967295; 
isAlphaBitm[3040] = 4294967295; isAlphaBitm[3041] = 4294967295; isAlphaBitm[3042] = 4294967295; isAlphaBitm[3043] = 4294967295; 
isAlphaBitm[3044] = 4294967295; isAlphaBitm[3045] = 4294967295; isAlphaBitm[3046] = 4294967295; isAlphaBitm[3047] = 4294967295; 
isAlphaBitm[3048] = 4294967295; isAlphaBitm[3049] = 4294967295; isAlphaBitm[3050] = 4294967295; isAlphaBitm[3051] = 4294967295; 
isAlphaBitm[3052] = 4294967295; isAlphaBitm[3053] = 4294967295; isAlphaBitm[3054] = 4294967295; isAlphaBitm[3055] = 4294967295; 
isAlphaBitm[3056] = 4294967295; isAlphaBitm[3057] = 4294967295; isAlphaBitm[3058] = 4294967295; isAlphaBitm[3059] = 4294967295; 
isAlphaBitm[3060] = 4294967295; isAlphaBitm[3061] = 4294967295; isAlphaBitm[3062] = 4294967295; isAlphaBitm[3063] = 4294967295; 
isAlphaBitm[3064] = 4294967295; isAlphaBitm[3065] = 4294967295; isAlphaBitm[3066] = 4294967295; isAlphaBitm[3067] = 4294967295; 
isAlphaBitm[3068] = 4294967295; isAlphaBitm[3069] = 4294967295; isAlphaBitm[3070] = 4294967295; isAlphaBitm[3071] = 4294967295; 
isAlphaBitm[3072] = 4294967295; isAlphaBitm[3073] = 4294967295; isAlphaBitm[3074] = 4294967295; isAlphaBitm[3075] = 4294967295; 
isAlphaBitm[3076] = 4294967295; isAlphaBitm[3077] = 4294967295; isAlphaBitm[3078] = 4294967295; isAlphaBitm[3079] = 4294967295; 
isAlphaBitm[3080] = 4294967295; isAlphaBitm[3081] = 4294967295; isAlphaBitm[3082] = 4294967295; isAlphaBitm[3083] = 4294967295; 
isAlphaBitm[3084] = 4294967295; isAlphaBitm[3085] = 4294967295; isAlphaBitm[3086] = 4294967295; isAlphaBitm[3087] = 4294967295; 
isAlphaBitm[3088] = 4294967295; isAlphaBitm[3089] = 4294967295; isAlphaBitm[3090] = 4294967295; isAlphaBitm[3091] = 4294967295; 
isAlphaBitm[3092] = 4294967295; isAlphaBitm[3093] = 4294967295; isAlphaBitm[3094] = 4294967295; isAlphaBitm[3095] = 4294967295; 
isAlphaBitm[3096] = 4294967295; isAlphaBitm[3097] = 4294967295; isAlphaBitm[3098] = 4294967295; isAlphaBitm[3099] = 4294967295; 
isAlphaBitm[3100] = 4294967295; isAlphaBitm[3101] = 4294967295; isAlphaBitm[3102] = 4294967295; isAlphaBitm[3103] = 4294967295; 
isAlphaBitm[3104] = 4294967295; isAlphaBitm[3105] = 4294967295; isAlphaBitm[3106] = 4294967295; isAlphaBitm[3107] = 4294967295; 
isAlphaBitm[3108] = 4294967295; isAlphaBitm[3109] = 4294967295; isAlphaBitm[3110] = 4294967295; isAlphaBitm[3111] = 4294967295; 
isAlphaBitm[3112] = 4294967295; isAlphaBitm[3113] = 4294967295; isAlphaBitm[3114] = 4294967295; isAlphaBitm[3115] = 4294967295; 
isAlphaBitm[3116] = 4294967295; isAlphaBitm[3117] = 4294967295; isAlphaBitm[3118] = 4294967295; isAlphaBitm[3119] = 4294967295; 
isAlphaBitm[3120] = 4294967295; isAlphaBitm[3121] = 4294967295; isAlphaBitm[3122] = 4294967295; isAlphaBitm[3123] = 4294967295; 
isAlphaBitm[3124] = 4294967295; isAlphaBitm[3125] = 4294967295; isAlphaBitm[3126] = 4294967295; isAlphaBitm[3127] = 4294967295; 
isAlphaBitm[3128] = 4294967295; isAlphaBitm[3129] = 4294967295; isAlphaBitm[3130] = 4294967295; isAlphaBitm[3131] = 4294967295; 
isAlphaBitm[3132] = 4294967295; isAlphaBitm[3133] = 4294967295; isAlphaBitm[3134] = 4294967295; isAlphaBitm[3135] = 8191; 
isAlphaBitm[3136] = 4294967295; isAlphaBitm[3137] = 4294967295; isAlphaBitm[3138] = 4294967295; isAlphaBitm[3139] = 4294967295; 
isAlphaBitm[3140] = 4294967295; isAlphaBitm[3141] = 4294967295; isAlphaBitm[3142] = 4294967295; isAlphaBitm[3143] = 4294967295; 
isAlphaBitm[3144] = 4294967295; isAlphaBitm[3145] = 4294967295; isAlphaBitm[3146] = 4294967295; isAlphaBitm[3147] = 4294967295; 
isAlphaBitm[3148] = 4294967295; isAlphaBitm[3149] = 4294967295; isAlphaBitm[3150] = 4294967295; isAlphaBitm[3151] = 4294967295; 
isAlphaBitm[3152] = 4294967295; isAlphaBitm[3153] = 4294967295; isAlphaBitm[3154] = 4294967295; isAlphaBitm[3155] = 4294967295; 
isAlphaBitm[3156] = 4294967295; isAlphaBitm[3157] = 4294967295; isAlphaBitm[3158] = 4294967295; isAlphaBitm[3159] = 524287; 
isAlphaBitm[3456] = 4294967295; isAlphaBitm[3457] = 4294967295; isAlphaBitm[3458] = 4294967295; isAlphaBitm[3459] = 4294967295; 
isAlphaBitm[3460] = 4294967295; isAlphaBitm[3461] = 4294967295; isAlphaBitm[3462] = 4294967295; isAlphaBitm[3463] = 4294967295; 
isAlphaBitm[3464] = 2147483647; isAlphaBitm[3467] = 4294901760; isAlphaBitm[3468] = 4294967295; isAlphaBitm[3469] = 4294967295; 
isAlphaBitm[3470] = 4294967295; isAlphaBitm[3471] = 4294967295; isAlphaBitm[3472] = 4294967295; isAlphaBitm[3473] = 4294967295; 
isAlphaBitm[3474] = 4294967295; isAlphaBitm[3475] = 4294967295; isAlphaBitm[3476] = 4294967295; isAlphaBitm[3477] = 4294967295; 
isAlphaBitm[3478] = 4294967295; isAlphaBitm[3479] = 268435455; isAlphaBitm[3552] = 4294967295; isAlphaBitm[3553] = 4294967295; 
isAlphaBitm[3554] = 4294967295; isAlphaBitm[3555] = 536807423; isAlphaBitm[3556] = 1140785663; isAlphaBitm[3744] = 4294967295; 
isAlphaBitm[3745] = 4294967295; isAlphaBitm[3746] = 4292870143; isAlphaBitm[3747] = 4294967295; isAlphaBitm[3748] = 3758096383; 
isAlphaBitm[3749] = 3959414372; isAlphaBitm[3750] = 4294967279; isAlphaBitm[3751] = 4294967295; isAlphaBitm[3752] = 3755993023; 
isAlphaBitm[3753] = 2080374783; isAlphaBitm[3754] = 4294835295; isAlphaBitm[3755] = 4294967295; isAlphaBitm[3756] = 4294967295; 
isAlphaBitm[3757] = 4294967295; isAlphaBitm[3758] = 4294967295; isAlphaBitm[3759] = 4294967295; isAlphaBitm[3760] = 4294967295; 
isAlphaBitm[3761] = 4294967295; isAlphaBitm[3762] = 4294967295; isAlphaBitm[3763] = 4294967295; isAlphaBitm[3764] = 4294967295; 
isAlphaBitm[3765] = 4294967103; isAlphaBitm[3766] = 4160749565; isAlphaBitm[3767] = 4160749567; isAlphaBitm[3768] = 4292870143; 
isAlphaBitm[3769] = 4292870143; isAlphaBitm[3770] = 4294934527; isAlphaBitm[3771] = 4294934527; isAlphaBitm[3772] = 4294966783; 
isAlphaBitm[3773] = 4294966783; isAlphaBitm[3774] = 4087; isAlphaBitm[3840] = 4194303871; isAlphaBitm[3841] = 2011; 
isAlphaBitm[3904] = 4294967295; isAlphaBitm[3905] = 4294967295; isAlphaBitm[3906] = 4294967295; isAlphaBitm[3907] = 4294967295; 
isAlphaBitm[3908] = 4294967295; isAlphaBitm[3909] = 4294967295; isAlphaBitm[3910] = 31; isAlphaBitm[3912] = 4294967295; 
isAlphaBitm[3913] = 4294967295; isAlphaBitm[3914] = 143; isAlphaBitm[3952] = 4294967279; isAlphaBitm[3953] = 184024726; 
isAlphaBitm[3954] = 2862017156; isAlphaBitm[3955] = 1593309078; isAlphaBitm[3956] = 268434431; isAlphaBitm[3957] = 268434414; 
isAlphaBitm[3977] = 4294901760; isAlphaBitm[3978] = 4294902783; isAlphaBitm[3979] = 4294902783; isAlphaBitm[3980] = 1023; 
isAlphaBitm[4096] = 4294967295; isAlphaBitm[4097] = 4294967295; isAlphaBitm[4098] = 4294967295; isAlphaBitm[4099] = 4294967295; 
isAlphaBitm[4100] = 4294967295; isAlphaBitm[4101] = 4294967295; isAlphaBitm[4102] = 4294967295; isAlphaBitm[4103] = 4294967295; 
isAlphaBitm[4104] = 4294967295; isAlphaBitm[4105] = 4294967295; isAlphaBitm[4106] = 4294967295; isAlphaBitm[4107] = 4294967295; 
isAlphaBitm[4108] = 4294967295; isAlphaBitm[4109] = 4294967295; isAlphaBitm[4110] = 4294967295; isAlphaBitm[4111] = 4294967295; 
isAlphaBitm[4112] = 4294967295; isAlphaBitm[4113] = 4294967295; isAlphaBitm[4114] = 4294967295; isAlphaBitm[4115] = 4294967295; 
isAlphaBitm[4116] = 4294967295; isAlphaBitm[4117] = 4294967295; isAlphaBitm[4118] = 4294967295; isAlphaBitm[4119] = 4294967295; 
isAlphaBitm[4120] = 4294967295; isAlphaBitm[4121] = 4294967295; isAlphaBitm[4122] = 4294967295; isAlphaBitm[4123] = 4294967295; 
isAlphaBitm[4124] = 4294967295; isAlphaBitm[4125] = 4294967295; isAlphaBitm[4126] = 4294967295; isAlphaBitm[4127] = 4294967295; 
isAlphaBitm[4128] = 4294967295; isAlphaBitm[4129] = 4294967295; isAlphaBitm[4130] = 4294967295; isAlphaBitm[4131] = 4294967295; 
isAlphaBitm[4132] = 4294967295; isAlphaBitm[4133] = 4294967295; isAlphaBitm[4134] = 4294967295; isAlphaBitm[4135] = 4294967295; 
isAlphaBitm[4136] = 4294967295; isAlphaBitm[4137] = 4294967295; isAlphaBitm[4138] = 4294967295; isAlphaBitm[4139] = 4294967295; 
isAlphaBitm[4140] = 4294967295; isAlphaBitm[4141] = 4294967295; isAlphaBitm[4142] = 4294967295; isAlphaBitm[4143] = 4294967295; 
isAlphaBitm[4144] = 4294967295; isAlphaBitm[4145] = 4294967295; isAlphaBitm[4146] = 4294967295; isAlphaBitm[4147] = 4294967295; 
isAlphaBitm[4148] = 4294967295; isAlphaBitm[4149] = 4294967295; isAlphaBitm[4150] = 4294967295; isAlphaBitm[4151] = 4294967295; 
isAlphaBitm[4152] = 4294967295; isAlphaBitm[4153] = 4294967295; isAlphaBitm[4154] = 4294967295; isAlphaBitm[4155] = 4294967295; 
isAlphaBitm[4156] = 4294967295; isAlphaBitm[4157] = 4294967295; isAlphaBitm[4158] = 4294967295; isAlphaBitm[4159] = 4294967295; 
isAlphaBitm[4160] = 4294967295; isAlphaBitm[4161] = 4294967295; isAlphaBitm[4162] = 4294967295; isAlphaBitm[4163] = 4294967295; 
isAlphaBitm[4164] = 4294967295; isAlphaBitm[4165] = 4294967295; isAlphaBitm[4166] = 4294967295; isAlphaBitm[4167] = 4294967295; 
isAlphaBitm[4168] = 4294967295; isAlphaBitm[4169] = 4294967295; isAlphaBitm[4170] = 4294967295; isAlphaBitm[4171] = 4294967295; 
isAlphaBitm[4172] = 4294967295; isAlphaBitm[4173] = 4294967295; isAlphaBitm[4174] = 4294967295; isAlphaBitm[4175] = 4294967295; 
isAlphaBitm[4176] = 4294967295; isAlphaBitm[4177] = 4294967295; isAlphaBitm[4178] = 4294967295; isAlphaBitm[4179] = 4294967295; 
isAlphaBitm[4180] = 4294967295; isAlphaBitm[4181] = 4294967295; isAlphaBitm[4182] = 4294967295; isAlphaBitm[4183] = 4294967295; 
isAlphaBitm[4184] = 4294967295; isAlphaBitm[4185] = 4294967295; isAlphaBitm[4186] = 4294967295; isAlphaBitm[4187] = 4294967295; 
isAlphaBitm[4188] = 4294967295; isAlphaBitm[4189] = 4294967295; isAlphaBitm[4190] = 4294967295; isAlphaBitm[4191] = 4294967295; 
isAlphaBitm[4192] = 4294967295; isAlphaBitm[4193] = 4294967295; isAlphaBitm[4194] = 4294967295; isAlphaBitm[4195] = 4294967295; 
isAlphaBitm[4196] = 4294967295; isAlphaBitm[4197] = 4294967295; isAlphaBitm[4198] = 4294967295; isAlphaBitm[4199] = 4294967295; 
isAlphaBitm[4200] = 4294967295; isAlphaBitm[4201] = 4294967295; isAlphaBitm[4202] = 4294967295; isAlphaBitm[4203] = 4294967295; 
isAlphaBitm[4204] = 4294967295; isAlphaBitm[4205] = 4294967295; isAlphaBitm[4206] = 4294967295; isAlphaBitm[4207] = 4294967295; 
isAlphaBitm[4208] = 4294967295; isAlphaBitm[4209] = 4294967295; isAlphaBitm[4210] = 4294967295; isAlphaBitm[4211] = 4294967295; 
isAlphaBitm[4212] = 4294967295; isAlphaBitm[4213] = 4294967295; isAlphaBitm[4214] = 4294967295; isAlphaBitm[4215] = 4294967295; 
isAlphaBitm[4216] = 4294967295; isAlphaBitm[4217] = 4294967295; isAlphaBitm[4218] = 4294967295; isAlphaBitm[4219] = 4294967295; 
isAlphaBitm[4220] = 4294967295; isAlphaBitm[4221] = 4294967295; isAlphaBitm[4222] = 4294967295; isAlphaBitm[4223] = 4294967295; 
isAlphaBitm[4224] = 4294967295; isAlphaBitm[4225] = 4294967295; isAlphaBitm[4226] = 4294967295; isAlphaBitm[4227] = 4294967295; 
isAlphaBitm[4228] = 4294967295; isAlphaBitm[4229] = 4294967295; isAlphaBitm[4230] = 4294967295; isAlphaBitm[4231] = 4294967295; 
isAlphaBitm[4232] = 4294967295; isAlphaBitm[4233] = 4294967295; isAlphaBitm[4234] = 4294967295; isAlphaBitm[4235] = 4294967295; 
isAlphaBitm[4236] = 4294967295; isAlphaBitm[4237] = 4294967295; isAlphaBitm[4238] = 4294967295; isAlphaBitm[4239] = 4294967295; 
isAlphaBitm[4240] = 4294967295; isAlphaBitm[4241] = 4294967295; isAlphaBitm[4242] = 4294967295; isAlphaBitm[4243] = 4294967295; 
isAlphaBitm[4244] = 4294967295; isAlphaBitm[4245] = 4294967295; isAlphaBitm[4246] = 4294967295; isAlphaBitm[4247] = 4294967295; 
isAlphaBitm[4248] = 4294967295; isAlphaBitm[4249] = 4294967295; isAlphaBitm[4250] = 4294967295; isAlphaBitm[4251] = 4294967295; 
isAlphaBitm[4252] = 4294967295; isAlphaBitm[4253] = 4294967295; isAlphaBitm[4254] = 4294967295; isAlphaBitm[4255] = 4294967295; 
isAlphaBitm[4256] = 4294967295; isAlphaBitm[4257] = 4294967295; isAlphaBitm[4258] = 4294967295; isAlphaBitm[4259] = 4294967295; 
isAlphaBitm[4260] = 4294967295; isAlphaBitm[4261] = 4294967295; isAlphaBitm[4262] = 4294967295; isAlphaBitm[4263] = 4294967295; 
isAlphaBitm[4264] = 4294967295; isAlphaBitm[4265] = 4294967295; isAlphaBitm[4266] = 4294967295; isAlphaBitm[4267] = 4294967295; 
isAlphaBitm[4268] = 4294967295; isAlphaBitm[4269] = 4294967295; isAlphaBitm[4270] = 4294967295; isAlphaBitm[4271] = 4294967295; 
isAlphaBitm[4272] = 4294967295; isAlphaBitm[4273] = 4294967295; isAlphaBitm[4274] = 4294967295; isAlphaBitm[4275] = 4294967295; 
isAlphaBitm[4276] = 4294967295; isAlphaBitm[4277] = 4294967295; isAlphaBitm[4278] = 4294967295; isAlphaBitm[4279] = 4294967295; 
isAlphaBitm[4280] = 4294967295; isAlphaBitm[4281] = 4294967295; isAlphaBitm[4282] = 4294967295; isAlphaBitm[4283] = 4294967295; 
isAlphaBitm[4284] = 4294967295; isAlphaBitm[4285] = 4294967295; isAlphaBitm[4286] = 4294967295; isAlphaBitm[4287] = 4294967295; 
isAlphaBitm[4288] = 4294967295; isAlphaBitm[4289] = 4294967295; isAlphaBitm[4290] = 4294967295; isAlphaBitm[4291] = 4294967295; 
isAlphaBitm[4292] = 4294967295; isAlphaBitm[4293] = 4294967295; isAlphaBitm[4294] = 4294967295; isAlphaBitm[4295] = 4294967295; 
isAlphaBitm[4296] = 4294967295; isAlphaBitm[4297] = 4294967295; isAlphaBitm[4298] = 4294967295; isAlphaBitm[4299] = 4294967295; 
isAlphaBitm[4300] = 4294967295; isAlphaBitm[4301] = 4294967295; isAlphaBitm[4302] = 4294967295; isAlphaBitm[4303] = 4294967295; 
isAlphaBitm[4304] = 4294967295; isAlphaBitm[4305] = 4294967295; isAlphaBitm[4306] = 4294967295; isAlphaBitm[4307] = 4294967295; 
isAlphaBitm[4308] = 4294967295; isAlphaBitm[4309] = 4294967295; isAlphaBitm[4310] = 4294967295; isAlphaBitm[4311] = 4294967295; 
isAlphaBitm[4312] = 4294967295; isAlphaBitm[4313] = 4294967295; isAlphaBitm[4314] = 4294967295; isAlphaBitm[4315] = 4294967295; 
isAlphaBitm[4316] = 4294967295; isAlphaBitm[4317] = 4294967295; isAlphaBitm[4318] = 4294967295; isAlphaBitm[4319] = 4294967295; 
isAlphaBitm[4320] = 4294967295; isAlphaBitm[4321] = 4294967295; isAlphaBitm[4322] = 4294967295; isAlphaBitm[4323] = 4294967295; 
isAlphaBitm[4324] = 4294967295; isAlphaBitm[4325] = 4294967295; isAlphaBitm[4326] = 4294967295; isAlphaBitm[4327] = 4294967295; 
isAlphaBitm[4328] = 4294967295; isAlphaBitm[4329] = 4294967295; isAlphaBitm[4330] = 4294967295; isAlphaBitm[4331] = 4294967295; 
isAlphaBitm[4332] = 4294967295; isAlphaBitm[4333] = 4294967295; isAlphaBitm[4334] = 4294967295; isAlphaBitm[4335] = 4294967295; 
isAlphaBitm[4336] = 4294967295; isAlphaBitm[4337] = 4294967295; isAlphaBitm[4338] = 4294967295; isAlphaBitm[4339] = 4294967295; 
isAlphaBitm[4340] = 4294967295; isAlphaBitm[4341] = 4294967295; isAlphaBitm[4342] = 4294967295; isAlphaBitm[4343] = 4294967295; 
isAlphaBitm[4344] = 4294967295; isAlphaBitm[4345] = 4294967295; isAlphaBitm[4346] = 4294967295; isAlphaBitm[4347] = 4294967295; 
isAlphaBitm[4348] = 4294967295; isAlphaBitm[4349] = 4294967295; isAlphaBitm[4350] = 4294967295; isAlphaBitm[4351] = 4294967295; 
isAlphaBitm[4352] = 4294967295; isAlphaBitm[4353] = 4294967295; isAlphaBitm[4354] = 4294967295; isAlphaBitm[4355] = 4294967295; 
isAlphaBitm[4356] = 4294967295; isAlphaBitm[4357] = 4294967295; isAlphaBitm[4358] = 4294967295; isAlphaBitm[4359] = 4294967295; 
isAlphaBitm[4360] = 4294967295; isAlphaBitm[4361] = 4294967295; isAlphaBitm[4362] = 4294967295; isAlphaBitm[4363] = 4294967295; 
isAlphaBitm[4364] = 4294967295; isAlphaBitm[4365] = 4294967295; isAlphaBitm[4366] = 4294967295; isAlphaBitm[4367] = 4294967295; 
isAlphaBitm[4368] = 4294967295; isAlphaBitm[4369] = 4294967295; isAlphaBitm[4370] = 4294967295; isAlphaBitm[4371] = 4294967295; 
isAlphaBitm[4372] = 4294967295; isAlphaBitm[4373] = 4294967295; isAlphaBitm[4374] = 4294967295; isAlphaBitm[4375] = 4294967295; 
isAlphaBitm[4376] = 4294967295; isAlphaBitm[4377] = 4294967295; isAlphaBitm[4378] = 4294967295; isAlphaBitm[4379] = 4294967295; 
isAlphaBitm[4380] = 4294967295; isAlphaBitm[4381] = 4294967295; isAlphaBitm[4382] = 4294967295; isAlphaBitm[4383] = 4294967295; 
isAlphaBitm[4384] = 4294967295; isAlphaBitm[4385] = 4294967295; isAlphaBitm[4386] = 4294967295; isAlphaBitm[4387] = 4294967295; 
isAlphaBitm[4388] = 4294967295; isAlphaBitm[4389] = 4294967295; isAlphaBitm[4390] = 4294967295; isAlphaBitm[4391] = 4294967295; 
isAlphaBitm[4392] = 4294967295; isAlphaBitm[4393] = 4294967295; isAlphaBitm[4394] = 4294967295; isAlphaBitm[4395] = 4294967295; 
isAlphaBitm[4396] = 4294967295; isAlphaBitm[4397] = 4294967295; isAlphaBitm[4398] = 4294967295; isAlphaBitm[4399] = 4294967295; 
isAlphaBitm[4400] = 4294967295; isAlphaBitm[4401] = 4294967295; isAlphaBitm[4402] = 4294967295; isAlphaBitm[4403] = 4294967295; 
isAlphaBitm[4404] = 4294967295; isAlphaBitm[4405] = 4294967295; isAlphaBitm[4406] = 4294967295; isAlphaBitm[4407] = 4294967295; 
isAlphaBitm[4408] = 4294967295; isAlphaBitm[4409] = 4294967295; isAlphaBitm[4410] = 4294967295; isAlphaBitm[4411] = 4294967295; 
isAlphaBitm[4412] = 4294967295; isAlphaBitm[4413] = 4294967295; isAlphaBitm[4414] = 4294967295; isAlphaBitm[4415] = 4294967295; 
isAlphaBitm[4416] = 4294967295; isAlphaBitm[4417] = 4294967295; isAlphaBitm[4418] = 4294967295; isAlphaBitm[4419] = 4294967295; 
isAlphaBitm[4420] = 4294967295; isAlphaBitm[4421] = 4294967295; isAlphaBitm[4422] = 4294967295; isAlphaBitm[4423] = 4294967295; 
isAlphaBitm[4424] = 4294967295; isAlphaBitm[4425] = 4294967295; isAlphaBitm[4426] = 4294967295; isAlphaBitm[4427] = 4294967295; 
isAlphaBitm[4428] = 4294967295; isAlphaBitm[4429] = 4294967295; isAlphaBitm[4430] = 4294967295; isAlphaBitm[4431] = 4294967295; 
isAlphaBitm[4432] = 4294967295; isAlphaBitm[4433] = 4294967295; isAlphaBitm[4434] = 4294967295; isAlphaBitm[4435] = 4294967295; 
isAlphaBitm[4436] = 4294967295; isAlphaBitm[4437] = 4294967295; isAlphaBitm[4438] = 4294967295; isAlphaBitm[4439] = 4294967295; 
isAlphaBitm[4440] = 4294967295; isAlphaBitm[4441] = 4294967295; isAlphaBitm[4442] = 4294967295; isAlphaBitm[4443] = 4294967295; 
isAlphaBitm[4444] = 4294967295; isAlphaBitm[4445] = 4294967295; isAlphaBitm[4446] = 4294967295; isAlphaBitm[4447] = 4294967295; 
isAlphaBitm[4448] = 4294967295; isAlphaBitm[4449] = 4294967295; isAlphaBitm[4450] = 4294967295; isAlphaBitm[4451] = 4294967295; 
isAlphaBitm[4452] = 4294967295; isAlphaBitm[4453] = 4294967295; isAlphaBitm[4454] = 4294967295; isAlphaBitm[4455] = 4294967295; 
isAlphaBitm[4456] = 4294967295; isAlphaBitm[4457] = 4294967295; isAlphaBitm[4458] = 4294967295; isAlphaBitm[4459] = 4294967295; 
isAlphaBitm[4460] = 4294967295; isAlphaBitm[4461] = 4294967295; isAlphaBitm[4462] = 4294967295; isAlphaBitm[4463] = 4294967295; 
isAlphaBitm[4464] = 4294967295; isAlphaBitm[4465] = 4294967295; isAlphaBitm[4466] = 4294967295; isAlphaBitm[4467] = 4294967295; 
isAlphaBitm[4468] = 4294967295; isAlphaBitm[4469] = 4294967295; isAlphaBitm[4470] = 4294967295; isAlphaBitm[4471] = 4294967295; 
isAlphaBitm[4472] = 4294967295; isAlphaBitm[4473] = 4294967295; isAlphaBitm[4474] = 4294967295; isAlphaBitm[4475] = 4294967295; 
isAlphaBitm[4476] = 4294967295; isAlphaBitm[4477] = 4294967295; isAlphaBitm[4478] = 4294967295; isAlphaBitm[4479] = 4294967295; 
isAlphaBitm[4480] = 4294967295; isAlphaBitm[4481] = 4294967295; isAlphaBitm[4482] = 4294967295; isAlphaBitm[4483] = 4294967295; 
isAlphaBitm[4484] = 4294967295; isAlphaBitm[4485] = 4294967295; isAlphaBitm[4486] = 4294967295; isAlphaBitm[4487] = 4294967295; 
isAlphaBitm[4488] = 4294967295; isAlphaBitm[4489] = 4294967295; isAlphaBitm[4490] = 4294967295; isAlphaBitm[4491] = 4294967295; 
isAlphaBitm[4492] = 4294967295; isAlphaBitm[4493] = 4294967295; isAlphaBitm[4494] = 4294967295; isAlphaBitm[4495] = 4294967295; 
isAlphaBitm[4496] = 4294967295; isAlphaBitm[4497] = 4294967295; isAlphaBitm[4498] = 4294967295; isAlphaBitm[4499] = 4294967295; 
isAlphaBitm[4500] = 4294967295; isAlphaBitm[4501] = 4294967295; isAlphaBitm[4502] = 4294967295; isAlphaBitm[4503] = 4294967295; 
isAlphaBitm[4504] = 4294967295; isAlphaBitm[4505] = 4294967295; isAlphaBitm[4506] = 4294967295; isAlphaBitm[4507] = 4294967295; 
isAlphaBitm[4508] = 4294967295; isAlphaBitm[4509] = 4294967295; isAlphaBitm[4510] = 4294967295; isAlphaBitm[4511] = 4294967295; 
isAlphaBitm[4512] = 4294967295; isAlphaBitm[4513] = 4294967295; isAlphaBitm[4514] = 4294967295; isAlphaBitm[4515] = 4294967295; 
isAlphaBitm[4516] = 4294967295; isAlphaBitm[4517] = 4294967295; isAlphaBitm[4518] = 4294967295; isAlphaBitm[4519] = 4294967295; 
isAlphaBitm[4520] = 4294967295; isAlphaBitm[4521] = 4294967295; isAlphaBitm[4522] = 4294967295; isAlphaBitm[4523] = 4294967295; 
isAlphaBitm[4524] = 4294967295; isAlphaBitm[4525] = 4294967295; isAlphaBitm[4526] = 4294967295; isAlphaBitm[4527] = 4294967295; 
isAlphaBitm[4528] = 4294967295; isAlphaBitm[4529] = 4294967295; isAlphaBitm[4530] = 4294967295; isAlphaBitm[4531] = 4294967295; 
isAlphaBitm[4532] = 4294967295; isAlphaBitm[4533] = 4294967295; isAlphaBitm[4534] = 4294967295; isAlphaBitm[4535] = 4294967295; 
isAlphaBitm[4536] = 4294967295; isAlphaBitm[4537] = 4294967295; isAlphaBitm[4538] = 4294967295; isAlphaBitm[4539] = 4294967295; 
isAlphaBitm[4540] = 4294967295; isAlphaBitm[4541] = 4294967295; isAlphaBitm[4542] = 4294967295; isAlphaBitm[4543] = 4294967295; 
isAlphaBitm[4544] = 4294967295; isAlphaBitm[4545] = 4294967295; isAlphaBitm[4546] = 4294967295; isAlphaBitm[4547] = 4294967295; 
isAlphaBitm[4548] = 4294967295; isAlphaBitm[4549] = 4294967295; isAlphaBitm[4550] = 4294967295; isAlphaBitm[4551] = 4294967295; 
isAlphaBitm[4552] = 4294967295; isAlphaBitm[4553] = 4294967295; isAlphaBitm[4554] = 4294967295; isAlphaBitm[4555] = 4294967295; 
isAlphaBitm[4556] = 4294967295; isAlphaBitm[4557] = 4294967295; isAlphaBitm[4558] = 4294967295; isAlphaBitm[4559] = 4294967295; 
isAlphaBitm[4560] = 4294967295; isAlphaBitm[4561] = 4294967295; isAlphaBitm[4562] = 4294967295; isAlphaBitm[4563] = 4294967295; 
isAlphaBitm[4564] = 4294967295; isAlphaBitm[4565] = 4294967295; isAlphaBitm[4566] = 4294967295; isAlphaBitm[4567] = 4294967295; 
isAlphaBitm[4568] = 4294967295; isAlphaBitm[4569] = 4294967295; isAlphaBitm[4570] = 4294967295; isAlphaBitm[4571] = 4294967295; 
isAlphaBitm[4572] = 4294967295; isAlphaBitm[4573] = 4294967295; isAlphaBitm[4574] = 4294967295; isAlphaBitm[4575] = 4294967295; 
isAlphaBitm[4576] = 4294967295; isAlphaBitm[4577] = 4294967295; isAlphaBitm[4578] = 4294967295; isAlphaBitm[4579] = 4294967295; 
isAlphaBitm[4580] = 4294967295; isAlphaBitm[4581] = 4294967295; isAlphaBitm[4582] = 4294967295; isAlphaBitm[4583] = 4294967295; 
isAlphaBitm[4584] = 4294967295; isAlphaBitm[4585] = 4294967295; isAlphaBitm[4586] = 4294967295; isAlphaBitm[4587] = 4294967295; 
isAlphaBitm[4588] = 4294967295; isAlphaBitm[4589] = 4294967295; isAlphaBitm[4590] = 4294967295; isAlphaBitm[4591] = 4294967295; 
isAlphaBitm[4592] = 4294967295; isAlphaBitm[4593] = 4294967295; isAlphaBitm[4594] = 4294967295; isAlphaBitm[4595] = 4294967295; 
isAlphaBitm[4596] = 4294967295; isAlphaBitm[4597] = 4294967295; isAlphaBitm[4598] = 4294967295; isAlphaBitm[4599] = 4294967295; 
isAlphaBitm[4600] = 4294967295; isAlphaBitm[4601] = 4294967295; isAlphaBitm[4602] = 4294967295; isAlphaBitm[4603] = 4294967295; 
isAlphaBitm[4604] = 4294967295; isAlphaBitm[4605] = 4294967295; isAlphaBitm[4606] = 4294967295; isAlphaBitm[4607] = 4294967295; 
isAlphaBitm[4608] = 4294967295; isAlphaBitm[4609] = 4294967295; isAlphaBitm[4610] = 4294967295; isAlphaBitm[4611] = 4294967295; 
isAlphaBitm[4612] = 4294967295; isAlphaBitm[4613] = 4294967295; isAlphaBitm[4614] = 4294967295; isAlphaBitm[4615] = 4294967295; 
isAlphaBitm[4616] = 4294967295; isAlphaBitm[4617] = 4294967295; isAlphaBitm[4618] = 4294967295; isAlphaBitm[4619] = 4294967295; 
isAlphaBitm[4620] = 4294967295; isAlphaBitm[4621] = 4294967295; isAlphaBitm[4622] = 4294967295; isAlphaBitm[4623] = 4294967295; 
isAlphaBitm[4624] = 4294967295; isAlphaBitm[4625] = 4294967295; isAlphaBitm[4626] = 4294967295; isAlphaBitm[4627] = 4294967295; 
isAlphaBitm[4628] = 4294967295; isAlphaBitm[4629] = 4294967295; isAlphaBitm[4630] = 4294967295; isAlphaBitm[4631] = 4294967295; 
isAlphaBitm[4632] = 4294967295; isAlphaBitm[4633] = 4294967295; isAlphaBitm[4634] = 4294967295; isAlphaBitm[4635] = 4294967295; 
isAlphaBitm[4636] = 4294967295; isAlphaBitm[4637] = 4294967295; isAlphaBitm[4638] = 4294967295; isAlphaBitm[4639] = 4294967295; 
isAlphaBitm[4640] = 4294967295; isAlphaBitm[4641] = 4294967295; isAlphaBitm[4642] = 4294967295; isAlphaBitm[4643] = 4294967295; 
isAlphaBitm[4644] = 4294967295; isAlphaBitm[4645] = 4294967295; isAlphaBitm[4646] = 4294967295; isAlphaBitm[4647] = 4294967295; 
isAlphaBitm[4648] = 4294967295; isAlphaBitm[4649] = 4294967295; isAlphaBitm[4650] = 4294967295; isAlphaBitm[4651] = 4294967295; 
isAlphaBitm[4652] = 4294967295; isAlphaBitm[4653] = 4294967295; isAlphaBitm[4654] = 4294967295; isAlphaBitm[4655] = 4294967295; 
isAlphaBitm[4656] = 4294967295; isAlphaBitm[4657] = 4294967295; isAlphaBitm[4658] = 4294967295; isAlphaBitm[4659] = 4294967295; 
isAlphaBitm[4660] = 4294967295; isAlphaBitm[4661] = 4294967295; isAlphaBitm[4662] = 4294967295; isAlphaBitm[4663] = 4294967295; 
isAlphaBitm[4664] = 4294967295; isAlphaBitm[4665] = 4294967295; isAlphaBitm[4666] = 4294967295; isAlphaBitm[4667] = 4294967295; 
isAlphaBitm[4668] = 4294967295; isAlphaBitm[4669] = 4294967295; isAlphaBitm[4670] = 4294967295; isAlphaBitm[4671] = 4294967295; 
isAlphaBitm[4672] = 4294967295; isAlphaBitm[4673] = 4294967295; isAlphaBitm[4674] = 4294967295; isAlphaBitm[4675] = 4294967295; 
isAlphaBitm[4676] = 4294967295; isAlphaBitm[4677] = 4294967295; isAlphaBitm[4678] = 4294967295; isAlphaBitm[4679] = 4294967295; 
isAlphaBitm[4680] = 4294967295; isAlphaBitm[4681] = 4294967295; isAlphaBitm[4682] = 4294967295; isAlphaBitm[4683] = 4294967295; 
isAlphaBitm[4684] = 4294967295; isAlphaBitm[4685] = 4294967295; isAlphaBitm[4686] = 4294967295; isAlphaBitm[4687] = 4294967295; 
isAlphaBitm[4688] = 4294967295; isAlphaBitm[4689] = 4294967295; isAlphaBitm[4690] = 4294967295; isAlphaBitm[4691] = 4294967295; 
isAlphaBitm[4692] = 4294967295; isAlphaBitm[4693] = 4294967295; isAlphaBitm[4694] = 4294967295; isAlphaBitm[4695] = 4294967295; 
isAlphaBitm[4696] = 4294967295; isAlphaBitm[4697] = 4294967295; isAlphaBitm[4698] = 4294967295; isAlphaBitm[4699] = 4294967295; 
isAlphaBitm[4700] = 4294967295; isAlphaBitm[4701] = 4294967295; isAlphaBitm[4702] = 4294967295; isAlphaBitm[4703] = 4294967295; 
isAlphaBitm[4704] = 4294967295; isAlphaBitm[4705] = 4294967295; isAlphaBitm[4706] = 4294967295; isAlphaBitm[4707] = 4294967295; 
isAlphaBitm[4708] = 4294967295; isAlphaBitm[4709] = 4294967295; isAlphaBitm[4710] = 4294967295; isAlphaBitm[4711] = 4294967295; 
isAlphaBitm[4712] = 4294967295; isAlphaBitm[4713] = 4294967295; isAlphaBitm[4714] = 4294967295; isAlphaBitm[4715] = 4294967295; 
isAlphaBitm[4716] = 4294967295; isAlphaBitm[4717] = 4294967295; isAlphaBitm[4718] = 4294967295; isAlphaBitm[4719] = 4294967295; 
isAlphaBitm[4720] = 4294967295; isAlphaBitm[4721] = 4294967295; isAlphaBitm[4722] = 4294967295; isAlphaBitm[4723] = 4294967295; 
isAlphaBitm[4724] = 4294967295; isAlphaBitm[4725] = 4294967295; isAlphaBitm[4726] = 4294967295; isAlphaBitm[4727] = 4294967295; 
isAlphaBitm[4728] = 4294967295; isAlphaBitm[4729] = 4294967295; isAlphaBitm[4730] = 4294967295; isAlphaBitm[4731] = 4294967295; 
isAlphaBitm[4732] = 4294967295; isAlphaBitm[4733] = 4294967295; isAlphaBitm[4734] = 4294967295; isAlphaBitm[4735] = 4294967295; 
isAlphaBitm[4736] = 4294967295; isAlphaBitm[4737] = 4294967295; isAlphaBitm[4738] = 4294967295; isAlphaBitm[4739] = 4294967295; 
isAlphaBitm[4740] = 4294967295; isAlphaBitm[4741] = 4294967295; isAlphaBitm[4742] = 4294967295; isAlphaBitm[4743] = 4294967295; 
isAlphaBitm[4744] = 4294967295; isAlphaBitm[4745] = 4294967295; isAlphaBitm[4746] = 4294967295; isAlphaBitm[4747] = 4294967295; 
isAlphaBitm[4748] = 4294967295; isAlphaBitm[4749] = 4294967295; isAlphaBitm[4750] = 4294967295; isAlphaBitm[4751] = 4294967295; 
isAlphaBitm[4752] = 4294967295; isAlphaBitm[4753] = 4294967295; isAlphaBitm[4754] = 4294967295; isAlphaBitm[4755] = 4294967295; 
isAlphaBitm[4756] = 4294967295; isAlphaBitm[4757] = 4294967295; isAlphaBitm[4758] = 4294967295; isAlphaBitm[4759] = 4294967295; 
isAlphaBitm[4760] = 4294967295; isAlphaBitm[4761] = 4294967295; isAlphaBitm[4762] = 4294967295; isAlphaBitm[4763] = 4294967295; 
isAlphaBitm[4764] = 4294967295; isAlphaBitm[4765] = 4294967295; isAlphaBitm[4766] = 4294967295; isAlphaBitm[4767] = 4294967295; 
isAlphaBitm[4768] = 4294967295; isAlphaBitm[4769] = 4294967295; isAlphaBitm[4770] = 4294967295; isAlphaBitm[4771] = 4294967295; 
isAlphaBitm[4772] = 4294967295; isAlphaBitm[4773] = 4294967295; isAlphaBitm[4774] = 4294967295; isAlphaBitm[4775] = 4294967295; 
isAlphaBitm[4776] = 4294967295; isAlphaBitm[4777] = 4294967295; isAlphaBitm[4778] = 4294967295; isAlphaBitm[4779] = 4294967295; 
isAlphaBitm[4780] = 4294967295; isAlphaBitm[4781] = 4294967295; isAlphaBitm[4782] = 4294967295; isAlphaBitm[4783] = 4294967295; 
isAlphaBitm[4784] = 4294967295; isAlphaBitm[4785] = 4294967295; isAlphaBitm[4786] = 4294967295; isAlphaBitm[4787] = 4294967295; 
isAlphaBitm[4788] = 4294967295; isAlphaBitm[4789] = 4294967295; isAlphaBitm[4790] = 4294967295; isAlphaBitm[4791] = 4294967295; 
isAlphaBitm[4792] = 4294967295; isAlphaBitm[4793] = 4294967295; isAlphaBitm[4794] = 4294967295; isAlphaBitm[4795] = 4294967295; 
isAlphaBitm[4796] = 4294967295; isAlphaBitm[4797] = 4294967295; isAlphaBitm[4798] = 4294967295; isAlphaBitm[4799] = 4294967295; 
isAlphaBitm[4800] = 4294967295; isAlphaBitm[4801] = 4294967295; isAlphaBitm[4802] = 4294967295; isAlphaBitm[4803] = 4294967295; 
isAlphaBitm[4804] = 4294967295; isAlphaBitm[4805] = 4294967295; isAlphaBitm[4806] = 4294967295; isAlphaBitm[4807] = 4294967295; 
isAlphaBitm[4808] = 4294967295; isAlphaBitm[4809] = 4294967295; isAlphaBitm[4810] = 4294967295; isAlphaBitm[4811] = 4294967295; 
isAlphaBitm[4812] = 4294967295; isAlphaBitm[4813] = 4294967295; isAlphaBitm[4814] = 4294967295; isAlphaBitm[4815] = 4294967295; 
isAlphaBitm[4816] = 4294967295; isAlphaBitm[4817] = 4294967295; isAlphaBitm[4818] = 4294967295; isAlphaBitm[4819] = 4294967295; 
isAlphaBitm[4820] = 4294967295; isAlphaBitm[4821] = 4294967295; isAlphaBitm[4822] = 4294967295; isAlphaBitm[4823] = 4294967295; 
isAlphaBitm[4824] = 4294967295; isAlphaBitm[4825] = 4294967295; isAlphaBitm[4826] = 4294967295; isAlphaBitm[4827] = 4294967295; 
isAlphaBitm[4828] = 4294967295; isAlphaBitm[4829] = 4294967295; isAlphaBitm[4830] = 4294967295; isAlphaBitm[4831] = 4294967295; 
isAlphaBitm[4832] = 4294967295; isAlphaBitm[4833] = 4294967295; isAlphaBitm[4834] = 4294967295; isAlphaBitm[4835] = 4294967295; 
isAlphaBitm[4836] = 4294967295; isAlphaBitm[4837] = 4294967295; isAlphaBitm[4838] = 4294967295; isAlphaBitm[4839] = 4294967295; 
isAlphaBitm[4840] = 4294967295; isAlphaBitm[4841] = 4294967295; isAlphaBitm[4842] = 4294967295; isAlphaBitm[4843] = 4294967295; 
isAlphaBitm[4844] = 4294967295; isAlphaBitm[4845] = 4294967295; isAlphaBitm[4846] = 4294967295; isAlphaBitm[4847] = 4294967295; 
isAlphaBitm[4848] = 4294967295; isAlphaBitm[4849] = 4294967295; isAlphaBitm[4850] = 4294967295; isAlphaBitm[4851] = 4294967295; 
isAlphaBitm[4852] = 4294967295; isAlphaBitm[4853] = 4294967295; isAlphaBitm[4854] = 4294967295; isAlphaBitm[4855] = 4294967295; 
isAlphaBitm[4856] = 4294967295; isAlphaBitm[4857] = 4294967295; isAlphaBitm[4858] = 4294967295; isAlphaBitm[4859] = 4294967295; 
isAlphaBitm[4860] = 4294967295; isAlphaBitm[4861] = 4294967295; isAlphaBitm[4862] = 4294967295; isAlphaBitm[4863] = 4294967295; 
isAlphaBitm[4864] = 4294967295; isAlphaBitm[4865] = 4294967295; isAlphaBitm[4866] = 4294967295; isAlphaBitm[4867] = 4294967295; 
isAlphaBitm[4868] = 4294967295; isAlphaBitm[4869] = 4294967295; isAlphaBitm[4870] = 4294967295; isAlphaBitm[4871] = 4294967295; 
isAlphaBitm[4872] = 4294967295; isAlphaBitm[4873] = 4294967295; isAlphaBitm[4874] = 4294967295; isAlphaBitm[4875] = 4294967295; 
isAlphaBitm[4876] = 4294967295; isAlphaBitm[4877] = 4294967295; isAlphaBitm[4878] = 4294967295; isAlphaBitm[4879] = 4294967295; 
isAlphaBitm[4880] = 4294967295; isAlphaBitm[4881] = 4294967295; isAlphaBitm[4882] = 4294967295; isAlphaBitm[4883] = 4294967295; 
isAlphaBitm[4884] = 4294967295; isAlphaBitm[4885] = 4294967295; isAlphaBitm[4886] = 4294967295; isAlphaBitm[4887] = 4294967295; 
isAlphaBitm[4888] = 4294967295; isAlphaBitm[4889] = 4294967295; isAlphaBitm[4890] = 4294967295; isAlphaBitm[4891] = 4294967295; 
isAlphaBitm[4892] = 4294967295; isAlphaBitm[4893] = 4294967295; isAlphaBitm[4894] = 4294967295; isAlphaBitm[4895] = 4294967295; 
isAlphaBitm[4896] = 4294967295; isAlphaBitm[4897] = 4294967295; isAlphaBitm[4898] = 4294967295; isAlphaBitm[4899] = 4294967295; 
isAlphaBitm[4900] = 4294967295; isAlphaBitm[4901] = 4294967295; isAlphaBitm[4902] = 4294967295; isAlphaBitm[4903] = 4294967295; 
isAlphaBitm[4904] = 4294967295; isAlphaBitm[4905] = 4294967295; isAlphaBitm[4906] = 4294967295; isAlphaBitm[4907] = 4294967295; 
isAlphaBitm[4908] = 4294967295; isAlphaBitm[4909] = 4294967295; isAlphaBitm[4910] = 4294967295; isAlphaBitm[4911] = 4294967295; 
isAlphaBitm[4912] = 4294967295; isAlphaBitm[4913] = 4294967295; isAlphaBitm[4914] = 4294967295; isAlphaBitm[4915] = 4294967295; 
isAlphaBitm[4916] = 4294967295; isAlphaBitm[4917] = 4294967295; isAlphaBitm[4918] = 4294967295; isAlphaBitm[4919] = 4294967295; 
isAlphaBitm[4920] = 4294967295; isAlphaBitm[4921] = 4294967295; isAlphaBitm[4922] = 4294967295; isAlphaBitm[4923] = 4294967295; 
isAlphaBitm[4924] = 4294967295; isAlphaBitm[4925] = 4294967295; isAlphaBitm[4926] = 4294967295; isAlphaBitm[4927] = 4294967295; 
isAlphaBitm[4928] = 4294967295; isAlphaBitm[4929] = 4294967295; isAlphaBitm[4930] = 4294967295; isAlphaBitm[4931] = 4294967295; 
isAlphaBitm[4932] = 4294967295; isAlphaBitm[4933] = 4294967295; isAlphaBitm[4934] = 4294967295; isAlphaBitm[4935] = 4294967295; 
isAlphaBitm[4936] = 4294967295; isAlphaBitm[4937] = 4294967295; isAlphaBitm[4938] = 4294967295; isAlphaBitm[4939] = 4294967295; 
isAlphaBitm[4940] = 4294967295; isAlphaBitm[4941] = 4294967295; isAlphaBitm[4942] = 4294967295; isAlphaBitm[4943] = 4294967295; 
isAlphaBitm[4944] = 4294967295; isAlphaBitm[4945] = 4294967295; isAlphaBitm[4946] = 4294967295; isAlphaBitm[4947] = 4294967295; 
isAlphaBitm[4948] = 4294967295; isAlphaBitm[4949] = 4294967295; isAlphaBitm[4950] = 4294967295; isAlphaBitm[4951] = 4294967295; 
isAlphaBitm[4952] = 4294967295; isAlphaBitm[4953] = 4294967295; isAlphaBitm[4954] = 4294967295; isAlphaBitm[4955] = 4294967295; 
isAlphaBitm[4956] = 4294967295; isAlphaBitm[4957] = 4294967295; isAlphaBitm[4958] = 4294967295; isAlphaBitm[4959] = 4294967295; 
isAlphaBitm[4960] = 4294967295; isAlphaBitm[4961] = 4294967295; isAlphaBitm[4962] = 4294967295; isAlphaBitm[4963] = 4294967295; 
isAlphaBitm[4964] = 4294967295; isAlphaBitm[4965] = 4294967295; isAlphaBitm[4966] = 4294967295; isAlphaBitm[4967] = 4294967295; 
isAlphaBitm[4968] = 4294967295; isAlphaBitm[4969] = 4294967295; isAlphaBitm[4970] = 4294967295; isAlphaBitm[4971] = 4294967295; 
isAlphaBitm[4972] = 4294967295; isAlphaBitm[4973] = 4294967295; isAlphaBitm[4974] = 4294967295; isAlphaBitm[4975] = 4294967295; 
isAlphaBitm[4976] = 4294967295; isAlphaBitm[4977] = 4294967295; isAlphaBitm[4978] = 4294967295; isAlphaBitm[4979] = 4294967295; 
isAlphaBitm[4980] = 4294967295; isAlphaBitm[4981] = 4294967295; isAlphaBitm[4982] = 4294967295; isAlphaBitm[4983] = 4294967295; 
isAlphaBitm[4984] = 4294967295; isAlphaBitm[4985] = 4294967295; isAlphaBitm[4986] = 4294967295; isAlphaBitm[4987] = 4294967295; 
isAlphaBitm[4988] = 4294967295; isAlphaBitm[4989] = 4294967295; isAlphaBitm[4990] = 4294967295; isAlphaBitm[4991] = 4294967295; 
isAlphaBitm[4992] = 4294967295; isAlphaBitm[4993] = 4294967295; isAlphaBitm[4994] = 4294967295; isAlphaBitm[4995] = 4294967295; 
isAlphaBitm[4996] = 4294967295; isAlphaBitm[4997] = 4294967295; isAlphaBitm[4998] = 4294967295; isAlphaBitm[4999] = 4294967295; 
isAlphaBitm[5000] = 4294967295; isAlphaBitm[5001] = 4294967295; isAlphaBitm[5002] = 4294967295; isAlphaBitm[5003] = 4294967295; 
isAlphaBitm[5004] = 4294967295; isAlphaBitm[5005] = 4294967295; isAlphaBitm[5006] = 4294967295; isAlphaBitm[5007] = 4294967295; 
isAlphaBitm[5008] = 4294967295; isAlphaBitm[5009] = 4294967295; isAlphaBitm[5010] = 4294967295; isAlphaBitm[5011] = 4294967295; 
isAlphaBitm[5012] = 4294967295; isAlphaBitm[5013] = 4294967295; isAlphaBitm[5014] = 4294967295; isAlphaBitm[5015] = 4294967295; 
isAlphaBitm[5016] = 4294967295; isAlphaBitm[5017] = 4294967295; isAlphaBitm[5018] = 4294967295; isAlphaBitm[5019] = 4294967295; 
isAlphaBitm[5020] = 4294967295; isAlphaBitm[5021] = 4294967295; isAlphaBitm[5022] = 4294967295; isAlphaBitm[5023] = 4294967295; 
isAlphaBitm[5024] = 4294967295; isAlphaBitm[5025] = 4294967295; isAlphaBitm[5026] = 4294967295; isAlphaBitm[5027] = 4294967295; 
isAlphaBitm[5028] = 4294967295; isAlphaBitm[5029] = 4294967295; isAlphaBitm[5030] = 4294967295; isAlphaBitm[5031] = 4294967295; 
isAlphaBitm[5032] = 4294967295; isAlphaBitm[5033] = 4294967295; isAlphaBitm[5034] = 4294967295; isAlphaBitm[5035] = 4294967295; 
isAlphaBitm[5036] = 4294967295; isAlphaBitm[5037] = 4294967295; isAlphaBitm[5038] = 4294967295; isAlphaBitm[5039] = 4294967295; 
isAlphaBitm[5040] = 4294967295; isAlphaBitm[5041] = 4294967295; isAlphaBitm[5042] = 4294967295; isAlphaBitm[5043] = 4294967295; 
isAlphaBitm[5044] = 4294967295; isAlphaBitm[5045] = 4294967295; isAlphaBitm[5046] = 4294967295; isAlphaBitm[5047] = 4294967295; 
isAlphaBitm[5048] = 4294967295; isAlphaBitm[5049] = 4294967295; isAlphaBitm[5050] = 4294967295; isAlphaBitm[5051] = 4294967295; 
isAlphaBitm[5052] = 4294967295; isAlphaBitm[5053] = 4294967295; isAlphaBitm[5054] = 4294967295; isAlphaBitm[5055] = 4294967295; 
isAlphaBitm[5056] = 4294967295; isAlphaBitm[5057] = 4294967295; isAlphaBitm[5058] = 4294967295; isAlphaBitm[5059] = 4294967295; 
isAlphaBitm[5060] = 4294967295; isAlphaBitm[5061] = 4294967295; isAlphaBitm[5062] = 4294967295; isAlphaBitm[5063] = 4294967295; 
isAlphaBitm[5064] = 4294967295; isAlphaBitm[5065] = 4294967295; isAlphaBitm[5066] = 4294967295; isAlphaBitm[5067] = 4294967295; 
isAlphaBitm[5068] = 4294967295; isAlphaBitm[5069] = 4294967295; isAlphaBitm[5070] = 4294967295; isAlphaBitm[5071] = 4294967295; 
isAlphaBitm[5072] = 4294967295; isAlphaBitm[5073] = 4294967295; isAlphaBitm[5074] = 4294967295; isAlphaBitm[5075] = 4294967295; 
isAlphaBitm[5076] = 4294967295; isAlphaBitm[5077] = 4294967295; isAlphaBitm[5078] = 4294967295; isAlphaBitm[5079] = 4294967295; 
isAlphaBitm[5080] = 4294967295; isAlphaBitm[5081] = 4294967295; isAlphaBitm[5082] = 4294967295; isAlphaBitm[5083] = 4294967295; 
isAlphaBitm[5084] = 4294967295; isAlphaBitm[5085] = 4294967295; isAlphaBitm[5086] = 4294967295; isAlphaBitm[5087] = 4294967295; 
isAlphaBitm[5088] = 4294967295; isAlphaBitm[5089] = 4294967295; isAlphaBitm[5090] = 4294967295; isAlphaBitm[5091] = 4294967295; 
isAlphaBitm[5092] = 4294967295; isAlphaBitm[5093] = 4294967295; isAlphaBitm[5094] = 4294967295; isAlphaBitm[5095] = 4294967295; 
isAlphaBitm[5096] = 4294967295; isAlphaBitm[5097] = 4294967295; isAlphaBitm[5098] = 4294967295; isAlphaBitm[5099] = 4294967295; 
isAlphaBitm[5100] = 4294967295; isAlphaBitm[5101] = 4294967295; isAlphaBitm[5102] = 4294967295; isAlphaBitm[5103] = 4294967295; 
isAlphaBitm[5104] = 4294967295; isAlphaBitm[5105] = 4294967295; isAlphaBitm[5106] = 4294967295; isAlphaBitm[5107] = 4294967295; 
isAlphaBitm[5108] = 4294967295; isAlphaBitm[5109] = 4294967295; isAlphaBitm[5110] = 4294967295; isAlphaBitm[5111] = 4294967295; 
isAlphaBitm[5112] = 4294967295; isAlphaBitm[5113] = 4294967295; isAlphaBitm[5114] = 4294967295; isAlphaBitm[5115] = 4294967295; 
isAlphaBitm[5116] = 4294967295; isAlphaBitm[5117] = 4294967295; isAlphaBitm[5118] = 4294967295; isAlphaBitm[5119] = 4294967295; 
isAlphaBitm[5120] = 4294967295; isAlphaBitm[5121] = 4294967295; isAlphaBitm[5122] = 4294967295; isAlphaBitm[5123] = 4294967295; 
isAlphaBitm[5124] = 4294967295; isAlphaBitm[5125] = 4294967295; isAlphaBitm[5126] = 4294967295; isAlphaBitm[5127] = 4294967295; 
isAlphaBitm[5128] = 4294967295; isAlphaBitm[5129] = 4294967295; isAlphaBitm[5130] = 4294967295; isAlphaBitm[5131] = 4294967295; 
isAlphaBitm[5132] = 4294967295; isAlphaBitm[5133] = 4294967295; isAlphaBitm[5134] = 4294967295; isAlphaBitm[5135] = 4294967295; 
isAlphaBitm[5136] = 4294967295; isAlphaBitm[5137] = 4294967295; isAlphaBitm[5138] = 4294967295; isAlphaBitm[5139] = 4294967295; 
isAlphaBitm[5140] = 4294967295; isAlphaBitm[5141] = 4294967295; isAlphaBitm[5142] = 4294967295; isAlphaBitm[5143] = 4294967295; 
isAlphaBitm[5144] = 4294967295; isAlphaBitm[5145] = 4294967295; isAlphaBitm[5146] = 4294967295; isAlphaBitm[5147] = 4294967295; 
isAlphaBitm[5148] = 4294967295; isAlphaBitm[5149] = 4294967295; isAlphaBitm[5150] = 4294967295; isAlphaBitm[5151] = 4294967295; 
isAlphaBitm[5152] = 4294967295; isAlphaBitm[5153] = 4294967295; isAlphaBitm[5154] = 4294967295; isAlphaBitm[5155] = 4294967295; 
isAlphaBitm[5156] = 4294967295; isAlphaBitm[5157] = 4294967295; isAlphaBitm[5158] = 4294967295; isAlphaBitm[5159] = 4294967295; 
isAlphaBitm[5160] = 4294967295; isAlphaBitm[5161] = 4294967295; isAlphaBitm[5162] = 4294967295; isAlphaBitm[5163] = 4294967295; 
isAlphaBitm[5164] = 4294967295; isAlphaBitm[5165] = 4294967295; isAlphaBitm[5166] = 4294967295; isAlphaBitm[5167] = 4294967295; 
isAlphaBitm[5168] = 4294967295; isAlphaBitm[5169] = 4294967295; isAlphaBitm[5170] = 4294967295; isAlphaBitm[5171] = 4294967295; 
isAlphaBitm[5172] = 4294967295; isAlphaBitm[5173] = 4294967295; isAlphaBitm[5174] = 4294967295; isAlphaBitm[5175] = 4294967295; 
isAlphaBitm[5176] = 4294967295; isAlphaBitm[5177] = 4294967295; isAlphaBitm[5178] = 4294967295; isAlphaBitm[5179] = 4294967295; 
isAlphaBitm[5180] = 4294967295; isAlphaBitm[5181] = 4294967295; isAlphaBitm[5182] = 4294967295; isAlphaBitm[5183] = 4294967295; 
isAlphaBitm[5184] = 4294967295; isAlphaBitm[5185] = 4294967295; isAlphaBitm[5186] = 4294967295; isAlphaBitm[5187] = 4294967295; 
isAlphaBitm[5188] = 4294967295; isAlphaBitm[5189] = 4294967295; isAlphaBitm[5190] = 4294967295; isAlphaBitm[5191] = 4294967295; 
isAlphaBitm[5192] = 4294967295; isAlphaBitm[5193] = 4294967295; isAlphaBitm[5194] = 4294967295; isAlphaBitm[5195] = 4294967295; 
isAlphaBitm[5196] = 4294967295; isAlphaBitm[5197] = 4294967295; isAlphaBitm[5198] = 4294967295; isAlphaBitm[5199] = 4294967295; 
isAlphaBitm[5200] = 4294967295; isAlphaBitm[5201] = 4294967295; isAlphaBitm[5202] = 4294967295; isAlphaBitm[5203] = 4294967295; 
isAlphaBitm[5204] = 4294967295; isAlphaBitm[5205] = 4294967295; isAlphaBitm[5206] = 4294967295; isAlphaBitm[5207] = 4294967295; 
isAlphaBitm[5208] = 4294967295; isAlphaBitm[5209] = 4294967295; isAlphaBitm[5210] = 4294967295; isAlphaBitm[5211] = 4294967295; 
isAlphaBitm[5212] = 4294967295; isAlphaBitm[5213] = 4294967295; isAlphaBitm[5214] = 4294967295; isAlphaBitm[5215] = 4294967295; 
isAlphaBitm[5216] = 4294967295; isAlphaBitm[5217] = 4294967295; isAlphaBitm[5218] = 4294967295; isAlphaBitm[5219] = 4294967295; 
isAlphaBitm[5220] = 4294967295; isAlphaBitm[5221] = 4294967295; isAlphaBitm[5222] = 4294967295; isAlphaBitm[5223] = 4294967295; 
isAlphaBitm[5224] = 4294967295; isAlphaBitm[5225] = 4294967295; isAlphaBitm[5226] = 4294967295; isAlphaBitm[5227] = 4294967295; 
isAlphaBitm[5228] = 4294967295; isAlphaBitm[5229] = 4294967295; isAlphaBitm[5230] = 4294967295; isAlphaBitm[5231] = 4294967295; 
isAlphaBitm[5232] = 4294967295; isAlphaBitm[5233] = 4294967295; isAlphaBitm[5234] = 4294967295; isAlphaBitm[5235] = 4294967295; 
isAlphaBitm[5236] = 4294967295; isAlphaBitm[5237] = 4294967295; isAlphaBitm[5238] = 4294967295; isAlphaBitm[5239] = 4294967295; 
isAlphaBitm[5240] = 4294967295; isAlphaBitm[5241] = 4294967295; isAlphaBitm[5242] = 4294967295; isAlphaBitm[5243] = 4294967295; 
isAlphaBitm[5244] = 4294967295; isAlphaBitm[5245] = 4294967295; isAlphaBitm[5246] = 4294967295; isAlphaBitm[5247] = 4294967295; 
isAlphaBitm[5248] = 4294967295; isAlphaBitm[5249] = 4294967295; isAlphaBitm[5250] = 4294967295; isAlphaBitm[5251] = 4294967295; 
isAlphaBitm[5252] = 4294967295; isAlphaBitm[5253] = 4294967295; isAlphaBitm[5254] = 4294967295; isAlphaBitm[5255] = 4294967295; 
isAlphaBitm[5256] = 4294967295; isAlphaBitm[5257] = 4294967295; isAlphaBitm[5258] = 4294967295; isAlphaBitm[5259] = 4294967295; 
isAlphaBitm[5260] = 4294967295; isAlphaBitm[5261] = 4294967295; isAlphaBitm[5262] = 4294967295; isAlphaBitm[5263] = 4294967295; 
isAlphaBitm[5264] = 4294967295; isAlphaBitm[5265] = 4294967295; isAlphaBitm[5266] = 4294967295; isAlphaBitm[5267] = 4294967295; 
isAlphaBitm[5268] = 4294967295; isAlphaBitm[5269] = 4294967295; isAlphaBitm[5270] = 4294967295; isAlphaBitm[5271] = 4294967295; 
isAlphaBitm[5272] = 4294967295; isAlphaBitm[5273] = 4294967295; isAlphaBitm[5274] = 4294967295; isAlphaBitm[5275] = 4294967295; 
isAlphaBitm[5276] = 4294967295; isAlphaBitm[5277] = 4294967295; isAlphaBitm[5278] = 4294967295; isAlphaBitm[5279] = 4294967295; 
isAlphaBitm[5280] = 4294967295; isAlphaBitm[5281] = 4294967295; isAlphaBitm[5282] = 4294967295; isAlphaBitm[5283] = 4294967295; 
isAlphaBitm[5284] = 4294967295; isAlphaBitm[5285] = 4294967295; isAlphaBitm[5286] = 4294967295; isAlphaBitm[5287] = 4294967295; 
isAlphaBitm[5288] = 4294967295; isAlphaBitm[5289] = 4294967295; isAlphaBitm[5290] = 4294967295; isAlphaBitm[5291] = 4294967295; 
isAlphaBitm[5292] = 4294967295; isAlphaBitm[5293] = 4294967295; isAlphaBitm[5294] = 4294967295; isAlphaBitm[5295] = 4294967295; 
isAlphaBitm[5296] = 4294967295; isAlphaBitm[5297] = 4294967295; isAlphaBitm[5298] = 4294967295; isAlphaBitm[5299] = 4294967295; 
isAlphaBitm[5300] = 4294967295; isAlphaBitm[5301] = 4294967295; isAlphaBitm[5302] = 4294967295; isAlphaBitm[5303] = 4294967295; 
isAlphaBitm[5304] = 4294967295; isAlphaBitm[5305] = 4294967295; isAlphaBitm[5306] = 4294967295; isAlphaBitm[5307] = 4294967295; 
isAlphaBitm[5308] = 4294967295; isAlphaBitm[5309] = 4294967295; isAlphaBitm[5310] = 4294967295; isAlphaBitm[5311] = 4294967295; 
isAlphaBitm[5312] = 4294967295; isAlphaBitm[5313] = 4294967295; isAlphaBitm[5314] = 4294967295; isAlphaBitm[5315] = 4294967295; 
isAlphaBitm[5316] = 4294967295; isAlphaBitm[5317] = 4294967295; isAlphaBitm[5318] = 4294967295; isAlphaBitm[5319] = 4294967295; 
isAlphaBitm[5320] = 4294967295; isAlphaBitm[5321] = 4294967295; isAlphaBitm[5322] = 4294967295; isAlphaBitm[5323] = 4294967295; 
isAlphaBitm[5324] = 4294967295; isAlphaBitm[5325] = 4294967295; isAlphaBitm[5326] = 4294967295; isAlphaBitm[5327] = 4294967295; 
isAlphaBitm[5328] = 4294967295; isAlphaBitm[5329] = 4294967295; isAlphaBitm[5330] = 4294967295; isAlphaBitm[5331] = 4294967295; 
isAlphaBitm[5332] = 4294967295; isAlphaBitm[5333] = 4294967295; isAlphaBitm[5334] = 4294967295; isAlphaBitm[5335] = 4294967295; 
isAlphaBitm[5336] = 4294967295; isAlphaBitm[5337] = 4294967295; isAlphaBitm[5338] = 4294967295; isAlphaBitm[5339] = 4294967295; 
isAlphaBitm[5340] = 4294967295; isAlphaBitm[5341] = 4294967295; isAlphaBitm[5342] = 4294967295; isAlphaBitm[5343] = 4294967295; 
isAlphaBitm[5344] = 4294967295; isAlphaBitm[5345] = 4294967295; isAlphaBitm[5346] = 4294967295; isAlphaBitm[5347] = 4294967295; 
isAlphaBitm[5348] = 4294967295; isAlphaBitm[5349] = 4294967295; isAlphaBitm[5350] = 4294967295; isAlphaBitm[5351] = 4294967295; 
isAlphaBitm[5352] = 4294967295; isAlphaBitm[5353] = 4294967295; isAlphaBitm[5354] = 4294967295; isAlphaBitm[5355] = 4294967295; 
isAlphaBitm[5356] = 4294967295; isAlphaBitm[5357] = 4294967295; isAlphaBitm[5358] = 4294967295; isAlphaBitm[5359] = 4294967295; 
isAlphaBitm[5360] = 4294967295; isAlphaBitm[5361] = 4294967295; isAlphaBitm[5362] = 4294967295; isAlphaBitm[5363] = 4294967295; 
isAlphaBitm[5364] = 4294967295; isAlphaBitm[5365] = 4294967295; isAlphaBitm[5366] = 4294967295; isAlphaBitm[5367] = 4294967295; 
isAlphaBitm[5368] = 4294967295; isAlphaBitm[5369] = 4294967295; isAlphaBitm[5370] = 4294967295; isAlphaBitm[5371] = 4294967295; 
isAlphaBitm[5372] = 4294967295; isAlphaBitm[5373] = 4294967295; isAlphaBitm[5374] = 4294967295; isAlphaBitm[5375] = 4294967295; 
isAlphaBitm[5376] = 4294967295; isAlphaBitm[5377] = 4294967295; isAlphaBitm[5378] = 4294967295; isAlphaBitm[5379] = 4294967295; 
isAlphaBitm[5380] = 4294967295; isAlphaBitm[5381] = 4294967295; isAlphaBitm[5382] = 4294967295; isAlphaBitm[5383] = 4294967295; 
isAlphaBitm[5384] = 4294967295; isAlphaBitm[5385] = 4294967295; isAlphaBitm[5386] = 4294967295; isAlphaBitm[5387] = 4294967295; 
isAlphaBitm[5388] = 4294967295; isAlphaBitm[5389] = 4294967295; isAlphaBitm[5390] = 4294967295; isAlphaBitm[5391] = 4294967295; 
isAlphaBitm[5392] = 4294967295; isAlphaBitm[5393] = 4294967295; isAlphaBitm[5394] = 4294967295; isAlphaBitm[5395] = 4294967295; 
isAlphaBitm[5396] = 4294967295; isAlphaBitm[5397] = 4294967295; isAlphaBitm[5398] = 4294967295; isAlphaBitm[5399] = 4294967295; 
isAlphaBitm[5400] = 4294967295; isAlphaBitm[5401] = 4294967295; isAlphaBitm[5402] = 4294967295; isAlphaBitm[5403] = 4294967295; 
isAlphaBitm[5404] = 4294967295; isAlphaBitm[5405] = 4294967295; isAlphaBitm[5406] = 4294967295; isAlphaBitm[5407] = 4294967295; 
isAlphaBitm[5408] = 4294967295; isAlphaBitm[5409] = 4294967295; isAlphaBitm[5410] = 4294967295; isAlphaBitm[5411] = 4294967295; 
isAlphaBitm[5412] = 4294967295; isAlphaBitm[5413] = 4294967295; isAlphaBitm[5414] = 4294967295; isAlphaBitm[5415] = 4294967295; 
isAlphaBitm[5416] = 4294967295; isAlphaBitm[5417] = 4294967295; isAlphaBitm[5418] = 4294967295; isAlphaBitm[5419] = 4294967295; 
isAlphaBitm[5420] = 4294967295; isAlphaBitm[5421] = 4294967295; isAlphaBitm[5422] = 4294967295; isAlphaBitm[5423] = 4294967295; 
isAlphaBitm[5424] = 4294967295; isAlphaBitm[5425] = 4294967295; isAlphaBitm[5426] = 4294967295; isAlphaBitm[5427] = 4294967295; 
isAlphaBitm[5428] = 4294967295; isAlphaBitm[5429] = 4294967295; isAlphaBitm[5430] = 8388607; isAlphaBitm[5432] = 4294967295; 
isAlphaBitm[5433] = 4294967295; isAlphaBitm[5434] = 4294967295; isAlphaBitm[5435] = 4294967295; isAlphaBitm[5436] = 4294967295; 
isAlphaBitm[5437] = 4294967295; isAlphaBitm[5438] = 4294967295; isAlphaBitm[5439] = 4294967295; isAlphaBitm[5440] = 4294967295; 
isAlphaBitm[5441] = 4294967295; isAlphaBitm[5442] = 4294967295; isAlphaBitm[5443] = 4294967295; isAlphaBitm[5444] = 4294967295; 
isAlphaBitm[5445] = 4294967295; isAlphaBitm[5446] = 4294967295; isAlphaBitm[5447] = 4294967295; isAlphaBitm[5448] = 4294967295; 
isAlphaBitm[5449] = 4294967295; isAlphaBitm[5450] = 4294967295; isAlphaBitm[5451] = 4294967295; isAlphaBitm[5452] = 4294967295; 
isAlphaBitm[5453] = 4294967295; isAlphaBitm[5454] = 4294967295; isAlphaBitm[5455] = 4294967295; isAlphaBitm[5456] = 4294967295; 
isAlphaBitm[5457] = 4294967295; isAlphaBitm[5458] = 4294967295; isAlphaBitm[5459] = 4294967295; isAlphaBitm[5460] = 4294967295; 
isAlphaBitm[5461] = 4294967295; isAlphaBitm[5462] = 4294967295; isAlphaBitm[5463] = 4294967295; isAlphaBitm[5464] = 4294967295; 
isAlphaBitm[5465] = 4294967295; isAlphaBitm[5466] = 4294967295; isAlphaBitm[5467] = 4294967295; isAlphaBitm[5468] = 4294967295; 
isAlphaBitm[5469] = 4294967295; isAlphaBitm[5470] = 4294967295; isAlphaBitm[5471] = 4294967295; isAlphaBitm[5472] = 4294967295; 
isAlphaBitm[5473] = 4294967295; isAlphaBitm[5474] = 4294967295; isAlphaBitm[5475] = 4294967295; isAlphaBitm[5476] = 4294967295; 
isAlphaBitm[5477] = 4294967295; isAlphaBitm[5478] = 4294967295; isAlphaBitm[5479] = 4294967295; isAlphaBitm[5480] = 4294967295; 
isAlphaBitm[5481] = 4294967295; isAlphaBitm[5482] = 4294967295; isAlphaBitm[5483] = 4294967295; isAlphaBitm[5484] = 4294967295; 
isAlphaBitm[5485] = 4294967295; isAlphaBitm[5486] = 4294967295; isAlphaBitm[5487] = 4294967295; isAlphaBitm[5488] = 4294967295; 
isAlphaBitm[5489] = 4294967295; isAlphaBitm[5490] = 4294967295; isAlphaBitm[5491] = 4294967295; isAlphaBitm[5492] = 4294967295; 
isAlphaBitm[5493] = 4294967295; isAlphaBitm[5494] = 4294967295; isAlphaBitm[5495] = 4294967295; isAlphaBitm[5496] = 4294967295; 
isAlphaBitm[5497] = 4294967295; isAlphaBitm[5498] = 4294967295; isAlphaBitm[5499] = 4294967295; isAlphaBitm[5500] = 4294967295; 
isAlphaBitm[5501] = 4294967295; isAlphaBitm[5502] = 4294967295; isAlphaBitm[5503] = 4294967295; isAlphaBitm[5504] = 4294967295; 
isAlphaBitm[5505] = 4294967295; isAlphaBitm[5506] = 4294967295; isAlphaBitm[5507] = 4294967295; isAlphaBitm[5508] = 4294967295; 
isAlphaBitm[5509] = 4294967295; isAlphaBitm[5510] = 4294967295; isAlphaBitm[5511] = 4294967295; isAlphaBitm[5512] = 4294967295; 
isAlphaBitm[5513] = 4294967295; isAlphaBitm[5514] = 4294967295; isAlphaBitm[5515] = 4294967295; isAlphaBitm[5516] = 4294967295; 
isAlphaBitm[5517] = 4294967295; isAlphaBitm[5518] = 4294967295; isAlphaBitm[5519] = 4294967295; isAlphaBitm[5520] = 4294967295; 
isAlphaBitm[5521] = 4294967295; isAlphaBitm[5522] = 4294967295; isAlphaBitm[5523] = 4294967295; isAlphaBitm[5524] = 4294967295; 
isAlphaBitm[5525] = 4294967295; isAlphaBitm[5526] = 4294967295; isAlphaBitm[5527] = 4294967295; isAlphaBitm[5528] = 4294967295; 
isAlphaBitm[5529] = 4294967295; isAlphaBitm[5530] = 4294967295; isAlphaBitm[5531] = 4294967295; isAlphaBitm[5532] = 4294967295; 
isAlphaBitm[5533] = 4294967295; isAlphaBitm[5534] = 4294967295; isAlphaBitm[5535] = 4294967295; isAlphaBitm[5536] = 4294967295; 
isAlphaBitm[5537] = 4294967295; isAlphaBitm[5538] = 4294967295; isAlphaBitm[5539] = 4294967295; isAlphaBitm[5540] = 4294967295; 
isAlphaBitm[5541] = 4294967295; isAlphaBitm[5542] = 4294967295; isAlphaBitm[5543] = 4294967295; isAlphaBitm[5544] = 4294967295; 
isAlphaBitm[5545] = 4294967295; isAlphaBitm[5546] = 4294967295; isAlphaBitm[5547] = 4294967295; isAlphaBitm[5548] = 4294967295; 
isAlphaBitm[5549] = 4294967295; isAlphaBitm[5550] = 4294967295; isAlphaBitm[5551] = 4294967295; isAlphaBitm[5552] = 4294967295; 
isAlphaBitm[5553] = 4294967295; isAlphaBitm[5554] = 4294967295; isAlphaBitm[5555] = 4294967295; isAlphaBitm[5556] = 4294967295; 
isAlphaBitm[5557] = 4294967295; isAlphaBitm[5558] = 4294967295; isAlphaBitm[5559] = 4294967295; isAlphaBitm[5560] = 4294967295; 
isAlphaBitm[5561] = 2097151; isAlphaBitm[5562] = 4294967295; isAlphaBitm[5563] = 4294967295; isAlphaBitm[5564] = 4294967295; 
isAlphaBitm[5565] = 4294967295; isAlphaBitm[5566] = 4294967295; isAlphaBitm[5567] = 4294967295; isAlphaBitm[5568] = 1073741823; 
isAlphaBitm[5569] = 4294967295; isAlphaBitm[5570] = 4294967295; isAlphaBitm[5571] = 4294967295; isAlphaBitm[5572] = 4294967295; 
isAlphaBitm[5573] = 4294967295; isAlphaBitm[5574] = 4294967295; isAlphaBitm[5575] = 4294967295; isAlphaBitm[5576] = 4294967295; 
isAlphaBitm[5577] = 4294967295; isAlphaBitm[5578] = 4294967295; isAlphaBitm[5579] = 4294967295; isAlphaBitm[5580] = 4294967295; 
isAlphaBitm[5581] = 4294967295; isAlphaBitm[5582] = 4294967295; isAlphaBitm[5583] = 4294967295; isAlphaBitm[5584] = 4294967295; 
isAlphaBitm[5585] = 4294967295; isAlphaBitm[5586] = 4294967295; isAlphaBitm[5587] = 4294967295; isAlphaBitm[5588] = 4294967295; 
isAlphaBitm[5589] = 4294967295; isAlphaBitm[5590] = 4294967295; isAlphaBitm[5591] = 4294967295; isAlphaBitm[5592] = 4294967295; 
isAlphaBitm[5593] = 4294967295; isAlphaBitm[5594] = 4294967295; isAlphaBitm[5595] = 4294967295; isAlphaBitm[5596] = 4294967295; 
isAlphaBitm[5597] = 4294967295; isAlphaBitm[5598] = 4294967295; isAlphaBitm[5599] = 4294967295; isAlphaBitm[5600] = 4294967295; 
isAlphaBitm[5601] = 4294967295; isAlphaBitm[5602] = 4294967295; isAlphaBitm[5603] = 4294967295; isAlphaBitm[5604] = 4294967295; 
isAlphaBitm[5605] = 4294967295; isAlphaBitm[5606] = 4294967295; isAlphaBitm[5607] = 4294967295; isAlphaBitm[5608] = 4294967295; 
isAlphaBitm[5609] = 4294967295; isAlphaBitm[5610] = 4294967295; isAlphaBitm[5611] = 4294967295; isAlphaBitm[5612] = 4294967295; 
isAlphaBitm[5613] = 4294967295; isAlphaBitm[5614] = 4294967295; isAlphaBitm[5615] = 4294967295; isAlphaBitm[5616] = 4294967295; 
isAlphaBitm[5617] = 4294967295; isAlphaBitm[5618] = 4294967295; isAlphaBitm[5619] = 4294967295; isAlphaBitm[5620] = 4294967295; 
isAlphaBitm[5621] = 4294967295; isAlphaBitm[5622] = 4294967295; isAlphaBitm[5623] = 4294967295; isAlphaBitm[5624] = 4294967295; 
isAlphaBitm[5625] = 4294967295; isAlphaBitm[5626] = 4294967295; isAlphaBitm[5627] = 4294967295; isAlphaBitm[5628] = 4294967295; 
isAlphaBitm[5629] = 4294967295; isAlphaBitm[5630] = 4294967295; isAlphaBitm[5631] = 4294967295; isAlphaBitm[5632] = 4294967295; 
isAlphaBitm[5633] = 4294967295; isAlphaBitm[5634] = 4294967295; isAlphaBitm[5635] = 4294967295; isAlphaBitm[5636] = 4294967295; 
isAlphaBitm[5637] = 4294967295; isAlphaBitm[5638] = 4294967295; isAlphaBitm[5639] = 4294967295; isAlphaBitm[5640] = 4294967295; 
isAlphaBitm[5641] = 4294967295; isAlphaBitm[5642] = 4294967295; isAlphaBitm[5643] = 4294967295; isAlphaBitm[5644] = 4294967295; 
isAlphaBitm[5645] = 4294967295; isAlphaBitm[5646] = 4294967295; isAlphaBitm[5647] = 4294967295; isAlphaBitm[5648] = 4294967295; 
isAlphaBitm[5649] = 4294967295; isAlphaBitm[5650] = 4294967295; isAlphaBitm[5651] = 4294967295; isAlphaBitm[5652] = 4294967295; 
isAlphaBitm[5653] = 4294967295; isAlphaBitm[5654] = 4294967295; isAlphaBitm[5655] = 4294967295; isAlphaBitm[5656] = 4294967295; 
isAlphaBitm[5657] = 4294967295; isAlphaBitm[5658] = 4294967295; isAlphaBitm[5659] = 4294967295; isAlphaBitm[5660] = 4294967295; 
isAlphaBitm[5661] = 4294967295; isAlphaBitm[5662] = 4294967295; isAlphaBitm[5663] = 4294967295; isAlphaBitm[5664] = 4294967295; 
isAlphaBitm[5665] = 4294967295; isAlphaBitm[5666] = 4294967295; isAlphaBitm[5667] = 4294967295; isAlphaBitm[5668] = 4294967295; 
isAlphaBitm[5669] = 4294967295; isAlphaBitm[5670] = 4294967295; isAlphaBitm[5671] = 4294967295; isAlphaBitm[5672] = 4294967295; 
isAlphaBitm[5673] = 4294967295; isAlphaBitm[5674] = 4294967295; isAlphaBitm[5675] = 4294967295; isAlphaBitm[5676] = 4294967295; 
isAlphaBitm[5677] = 4294967295; isAlphaBitm[5678] = 4294967295; isAlphaBitm[5679] = 4294967295; isAlphaBitm[5680] = 4294967295; 
isAlphaBitm[5681] = 4294967295; isAlphaBitm[5682] = 4294967295; isAlphaBitm[5683] = 4294967295; isAlphaBitm[5684] = 4294967295; 
isAlphaBitm[5685] = 4294967295; isAlphaBitm[5686] = 4294967295; isAlphaBitm[5687] = 4294967295; isAlphaBitm[5688] = 4294967295; 
isAlphaBitm[5689] = 4294967295; isAlphaBitm[5690] = 4294967295; isAlphaBitm[5691] = 4294967295; isAlphaBitm[5692] = 4294967295; 
isAlphaBitm[5693] = 4294967295; isAlphaBitm[5694] = 4294967295; isAlphaBitm[5695] = 4294967295; isAlphaBitm[5696] = 4294967295; 
isAlphaBitm[5697] = 4294967295; isAlphaBitm[5698] = 4294967295; isAlphaBitm[5699] = 4294967295; isAlphaBitm[5700] = 4294967295; 
isAlphaBitm[5701] = 4294967295; isAlphaBitm[5702] = 4294967295; isAlphaBitm[5703] = 4294967295; isAlphaBitm[5704] = 4294967295; 
isAlphaBitm[5705] = 4294967295; isAlphaBitm[5706] = 4294967295; isAlphaBitm[5707] = 4294967295; isAlphaBitm[5708] = 4294967295; 
isAlphaBitm[5709] = 4294967295; isAlphaBitm[5710] = 4294967295; isAlphaBitm[5711] = 4294967295; isAlphaBitm[5712] = 4294967295; 
isAlphaBitm[5713] = 4294967295; isAlphaBitm[5714] = 4294967295; isAlphaBitm[5715] = 4294967295; isAlphaBitm[5716] = 4294967295; 
isAlphaBitm[5717] = 4294967295; isAlphaBitm[5718] = 4294967295; isAlphaBitm[5719] = 4294967295; isAlphaBitm[5720] = 4294967295; 
isAlphaBitm[5721] = 4294967295; isAlphaBitm[5722] = 4294967295; isAlphaBitm[5723] = 4294967295; isAlphaBitm[5724] = 4294967295; 
isAlphaBitm[5725] = 4294967295; isAlphaBitm[5726] = 4294967295; isAlphaBitm[5727] = 4294967295; isAlphaBitm[5728] = 4294967295; 
isAlphaBitm[5729] = 4294967295; isAlphaBitm[5730] = 4294967295; isAlphaBitm[5731] = 4294967295; isAlphaBitm[5732] = 4294967295; 
isAlphaBitm[5733] = 4294967295; isAlphaBitm[5734] = 4294967295; isAlphaBitm[5735] = 4294967295; isAlphaBitm[5736] = 4294967295; 
isAlphaBitm[5737] = 4294967295; isAlphaBitm[5738] = 4294967295; isAlphaBitm[5739] = 4294967295; isAlphaBitm[5740] = 4294967295; 
isAlphaBitm[5741] = 4294967295; isAlphaBitm[5742] = 4294967295; isAlphaBitm[5743] = 4294967295; isAlphaBitm[5744] = 4294967295; 
isAlphaBitm[5745] = 4294967295; isAlphaBitm[5746] = 4294967295; isAlphaBitm[5747] = 4294967295; isAlphaBitm[5748] = 4294967295; 
isAlphaBitm[5749] = 4294901763; isAlphaBitm[5750] = 4294967295; isAlphaBitm[5751] = 4294967295; isAlphaBitm[5752] = 4294967295; 
isAlphaBitm[5753] = 4294967295; isAlphaBitm[5754] = 4294967295; isAlphaBitm[5755] = 4294967295; isAlphaBitm[5756] = 4294967295; 
isAlphaBitm[5757] = 4294967295; isAlphaBitm[5758] = 4294967295; isAlphaBitm[5759] = 4294967295; isAlphaBitm[5760] = 4294967295; 
isAlphaBitm[5761] = 4294967295; isAlphaBitm[5762] = 4294967295; isAlphaBitm[5763] = 4294967295; isAlphaBitm[5764] = 4294967295; 
isAlphaBitm[5765] = 4294967295; isAlphaBitm[5766] = 4294967295; isAlphaBitm[5767] = 4294967295; isAlphaBitm[5768] = 4294967295; 
isAlphaBitm[5769] = 4294967295; isAlphaBitm[5770] = 4294967295; isAlphaBitm[5771] = 4294967295; isAlphaBitm[5772] = 4294967295; 
isAlphaBitm[5773] = 4294967295; isAlphaBitm[5774] = 4294967295; isAlphaBitm[5775] = 4294967295; isAlphaBitm[5776] = 4294967295; 
isAlphaBitm[5777] = 4294967295; isAlphaBitm[5778] = 4294967295; isAlphaBitm[5779] = 4294967295; isAlphaBitm[5780] = 4294967295; 
isAlphaBitm[5781] = 4294967295; isAlphaBitm[5782] = 4294967295; isAlphaBitm[5783] = 4294967295; isAlphaBitm[5784] = 4294967295; 
isAlphaBitm[5785] = 4294967295; isAlphaBitm[5786] = 4294967295; isAlphaBitm[5787] = 4294967295; isAlphaBitm[5788] = 4294967295; 
isAlphaBitm[5789] = 4294967295; isAlphaBitm[5790] = 4294967295; isAlphaBitm[5791] = 4294967295; isAlphaBitm[5792] = 4294967295; 
isAlphaBitm[5793] = 4294967295; isAlphaBitm[5794] = 4294967295; isAlphaBitm[5795] = 4294967295; isAlphaBitm[5796] = 4294967295; 
isAlphaBitm[5797] = 4294967295; isAlphaBitm[5798] = 4294967295; isAlphaBitm[5799] = 4294967295; isAlphaBitm[5800] = 4294967295; 
isAlphaBitm[5801] = 4294967295; isAlphaBitm[5802] = 4294967295; isAlphaBitm[5803] = 4294967295; isAlphaBitm[5804] = 4294967295; 
isAlphaBitm[5805] = 4294967295; isAlphaBitm[5806] = 4294967295; isAlphaBitm[5807] = 4294967295; isAlphaBitm[5808] = 4294967295; 
isAlphaBitm[5809] = 4294967295; isAlphaBitm[5810] = 4294967295; isAlphaBitm[5811] = 4294967295; isAlphaBitm[5812] = 4294967295; 
isAlphaBitm[5813] = 4294967295; isAlphaBitm[5814] = 4294967295; isAlphaBitm[5815] = 4294967295; isAlphaBitm[5816] = 4294967295; 
isAlphaBitm[5817] = 4294967295; isAlphaBitm[5818] = 4294967295; isAlphaBitm[5819] = 4294967295; isAlphaBitm[5820] = 4294967295; 
isAlphaBitm[5821] = 4294967295; isAlphaBitm[5822] = 4294967295; isAlphaBitm[5823] = 4294967295; isAlphaBitm[5824] = 4294967295; 
isAlphaBitm[5825] = 4294967295; isAlphaBitm[5826] = 4294967295; isAlphaBitm[5827] = 4294967295; isAlphaBitm[5828] = 4294967295; 
isAlphaBitm[5829] = 4294967295; isAlphaBitm[5830] = 4294967295; isAlphaBitm[5831] = 4294967295; isAlphaBitm[5832] = 4294967295; 
isAlphaBitm[5833] = 4294967295; isAlphaBitm[5834] = 4294967295; isAlphaBitm[5835] = 4294967295; isAlphaBitm[5836] = 4294967295; 
isAlphaBitm[5837] = 4294967295; isAlphaBitm[5838] = 4294967295; isAlphaBitm[5839] = 4294967295; isAlphaBitm[5840] = 4294967295; 
isAlphaBitm[5841] = 4294967295; isAlphaBitm[5842] = 4294967295; isAlphaBitm[5843] = 4294967295; isAlphaBitm[5844] = 4294967295; 
isAlphaBitm[5845] = 4294967295; isAlphaBitm[5846] = 4294967295; isAlphaBitm[5847] = 4294967295; isAlphaBitm[5848] = 4294967295; 
isAlphaBitm[5849] = 4294967295; isAlphaBitm[5850] = 4294967295; isAlphaBitm[5851] = 4294967295; isAlphaBitm[5852] = 4294967295; 
isAlphaBitm[5853] = 4294967295; isAlphaBitm[5854] = 4294967295; isAlphaBitm[5855] = 4294967295; isAlphaBitm[5856] = 4294967295; 
isAlphaBitm[5857] = 4294967295; isAlphaBitm[5858] = 4294967295; isAlphaBitm[5859] = 4294967295; isAlphaBitm[5860] = 4294967295; 
isAlphaBitm[5861] = 4294967295; isAlphaBitm[5862] = 4294967295; isAlphaBitm[5863] = 4294967295; isAlphaBitm[5864] = 4294967295; 
isAlphaBitm[5865] = 4294967295; isAlphaBitm[5866] = 4294967295; isAlphaBitm[5867] = 4294967295; isAlphaBitm[5868] = 4294967295; 
isAlphaBitm[5869] = 4294967295; isAlphaBitm[5870] = 4294967295; isAlphaBitm[5871] = 4294967295; isAlphaBitm[5872] = 4294967295; 
isAlphaBitm[5873] = 4294967295; isAlphaBitm[5874] = 4294967295; isAlphaBitm[5875] = 4294967295; isAlphaBitm[5876] = 4294967295; 
isAlphaBitm[5877] = 4294967295; isAlphaBitm[5878] = 4294967295; isAlphaBitm[5879] = 4294967295; isAlphaBitm[5880] = 4294967295; 
isAlphaBitm[5881] = 4294967295; isAlphaBitm[5882] = 4294967295; isAlphaBitm[5883] = 4294967295; isAlphaBitm[5884] = 4294967295; 
isAlphaBitm[5885] = 4294967295; isAlphaBitm[5886] = 4294967295; isAlphaBitm[5887] = 4294967295; isAlphaBitm[5888] = 4294967295; 
isAlphaBitm[5889] = 4294967295; isAlphaBitm[5890] = 4294967295; isAlphaBitm[5891] = 4294967295; isAlphaBitm[5892] = 4294967295; 
isAlphaBitm[5893] = 4294967295; isAlphaBitm[5894] = 4294967295; isAlphaBitm[5895] = 4294967295; isAlphaBitm[5896] = 4294967295; 
isAlphaBitm[5897] = 4294967295; isAlphaBitm[5898] = 4294967295; isAlphaBitm[5899] = 4294967295; isAlphaBitm[5900] = 4294967295; 
isAlphaBitm[5901] = 4294967295; isAlphaBitm[5902] = 4294967295; isAlphaBitm[5903] = 4294967295; isAlphaBitm[5904] = 4294967295; 
isAlphaBitm[5905] = 4294967295; isAlphaBitm[5906] = 4294967295; isAlphaBitm[5907] = 4294967295; isAlphaBitm[5908] = 4294967295; 
isAlphaBitm[5909] = 4294967295; isAlphaBitm[5910] = 4294967295; isAlphaBitm[5911] = 4294967295; isAlphaBitm[5912] = 4294967295; 
isAlphaBitm[5913] = 4294967295; isAlphaBitm[5914] = 4294967295; isAlphaBitm[5915] = 4294967295; isAlphaBitm[5916] = 4294967295; 
isAlphaBitm[5917] = 4294967295; isAlphaBitm[5918] = 4294967295; isAlphaBitm[5919] = 4294967295; isAlphaBitm[5920] = 4294967295; 
isAlphaBitm[5921] = 4294967295; isAlphaBitm[5922] = 4294967295; isAlphaBitm[5923] = 4294967295; isAlphaBitm[5924] = 4294967295; 
isAlphaBitm[5925] = 4294967295; isAlphaBitm[5926] = 4294967295; isAlphaBitm[5927] = 4294967295; isAlphaBitm[5928] = 4294967295; 
isAlphaBitm[5929] = 4294967295; isAlphaBitm[5930] = 4294967295; isAlphaBitm[5931] = 4294967295; isAlphaBitm[5932] = 4294967295; 
isAlphaBitm[5933] = 4294967295; isAlphaBitm[5934] = 4294967295; isAlphaBitm[5935] = 4294967295; isAlphaBitm[5936] = 4294967295; 
isAlphaBitm[5937] = 4294967295; isAlphaBitm[5938] = 4294967295; isAlphaBitm[5939] = 4294967295; isAlphaBitm[5940] = 4294967295; 
isAlphaBitm[5941] = 4294967295; isAlphaBitm[5942] = 4294967295; isAlphaBitm[5943] = 4294967295; isAlphaBitm[5944] = 4294967295; 
isAlphaBitm[5945] = 4294967295; isAlphaBitm[5946] = 4294967295; isAlphaBitm[5947] = 4294967295; isAlphaBitm[5948] = 4294967295; 
isAlphaBitm[5949] = 4294967295; isAlphaBitm[5950] = 4294967295; isAlphaBitm[5951] = 4294967295; isAlphaBitm[5952] = 4294967295; 
isAlphaBitm[5953] = 4294967295; isAlphaBitm[5954] = 4294967295; isAlphaBitm[5955] = 4294967295; isAlphaBitm[5956] = 4294967295; 
isAlphaBitm[5957] = 4294967295; isAlphaBitm[5958] = 4294967295; isAlphaBitm[5959] = 4294967295; isAlphaBitm[5960] = 4294967295; 
isAlphaBitm[5961] = 4294967295; isAlphaBitm[5962] = 4294967295; isAlphaBitm[5963] = 4294967295; isAlphaBitm[5964] = 4294967295; 
isAlphaBitm[5965] = 4294967295; isAlphaBitm[5966] = 4294967295; isAlphaBitm[5967] = 4294967295; isAlphaBitm[5968] = 4294967295; 
isAlphaBitm[5969] = 4294967295; isAlphaBitm[5970] = 4294967295; isAlphaBitm[5971] = 4294967295; isAlphaBitm[5972] = 4294967295; 
isAlphaBitm[5973] = 4294967295; isAlphaBitm[5974] = 4294967295; isAlphaBitm[5975] = 4294967295; isAlphaBitm[5976] = 4294967295; 
isAlphaBitm[5977] = 4294967295; isAlphaBitm[5978] = 4294967295; isAlphaBitm[5979] = 4294967295; isAlphaBitm[5980] = 4294967295; 
isAlphaBitm[5981] = 4294967295; isAlphaBitm[5982] = 4294967295; isAlphaBitm[5983] = 1; isAlphaBitm[6080] = 4294967295; 
isAlphaBitm[6081] = 4294967295; isAlphaBitm[6082] = 4294967295; isAlphaBitm[6083] = 4294967295; isAlphaBitm[6084] = 4294967295; 
isAlphaBitm[6085] = 4294967295; isAlphaBitm[6086] = 4294967295; isAlphaBitm[6087] = 4294967295; isAlphaBitm[6088] = 4294967295; 
isAlphaBitm[6089] = 4294967295; isAlphaBitm[6090] = 4294967295; isAlphaBitm[6091] = 4294967295; isAlphaBitm[6092] = 4294967295; 
isAlphaBitm[6093] = 4294967295; isAlphaBitm[6094] = 4294967295; isAlphaBitm[6095] = 4294967295; isAlphaBitm[6096] = 1073741823; 

function isAlpha(c) {
	var cp = ord(c);
	var idx = Math.floor(cp / 32);
	var byt = isAlphaBitm[idx];
	if (byt) {
		var mask = Math.pow(2, cp - idx * 32);
		return (byt & mask) != 0;
	}
	return false;
}

function isAlnum(c) { return isAlpha(c) || isDigit(c); }
function isBlank(c) {
    var cp = ord(c);
    if (cp == 9)
	return true;
    if (cp == 32)
	return true;
    if (cp == 160)
	return true;
    if (cp == 5760)
	return true;
    if (cp >= 8192 && cp <= 8202)
	return true;
    if (cp == 8239)
	return true;
    if (cp == 8287)
	return true;
    if (cp == 12288)
	return true;
    
    return false;
}
function isSpace(c) {
    var cp = ord(c);
    if (cp >= 10 && cp <= 13)
	return true;
    if (cp == 133)
	return true;
    if (cp == 8232)
	return true;
    if (cp == 8233)
	return true;
    
    return isBlank(c);
}
function isXdigit(c) { return (c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F'); }

var isPrintBitm = new Uint32Array(6097);
isPrintBitm[1] = 4294967295; isPrintBitm[2] = 4294967295; isPrintBitm[3] = 2147483647; isPrintBitm[5] = 4294967295; 
isPrintBitm[6] = 4294967295; isPrintBitm[7] = 4294967295; isPrintBitm[8] = 4294967295; isPrintBitm[9] = 4294967295; 
isPrintBitm[10] = 4294967295; isPrintBitm[11] = 4294967295; isPrintBitm[12] = 4294967295; isPrintBitm[13] = 4294967295; 
isPrintBitm[14] = 4294967295; isPrintBitm[15] = 4294967295; isPrintBitm[16] = 4294967295; isPrintBitm[17] = 4294967295; 
isPrintBitm[18] = 4294967295; isPrintBitm[19] = 4294967295; isPrintBitm[20] = 4294967295; isPrintBitm[21] = 4294967295; 
isPrintBitm[22] = 4294967295; isPrintBitm[23] = 4294967295; isPrintBitm[24] = 4294967295; isPrintBitm[25] = 4294967295; 
isPrintBitm[26] = 4294967295; isPrintBitm[27] = 4244635647; isPrintBitm[28] = 4294957040; isPrintBitm[29] = 4294967291; 
isPrintBitm[30] = 4294967295; isPrintBitm[31] = 4294967295; isPrintBitm[32] = 4294967295; isPrintBitm[33] = 4294967295; 
isPrintBitm[34] = 4294967295; isPrintBitm[35] = 4294967295; isPrintBitm[36] = 4294967295; isPrintBitm[37] = 4294967295; 
isPrintBitm[38] = 4294967295; isPrintBitm[39] = 4294967295; isPrintBitm[40] = 4294967295; isPrintBitm[41] = 4294901759; 
isPrintBitm[42] = 4269801471; isPrintBitm[43] = 4294967294; isPrintBitm[44] = 4294895359; isPrintBitm[45] = 4294967295; 
isPrintBitm[46] = 4294902015; isPrintBitm[47] = 2033663; isPrintBitm[48] = 3758096383; isPrintBitm[49] = 4294967295; 
isPrintBitm[50] = 4294967295; isPrintBitm[51] = 4294967295; isPrintBitm[52] = 4294967295; isPrintBitm[53] = 4294967295; 
isPrintBitm[54] = 4294967295; isPrintBitm[55] = 4294967295; isPrintBitm[56] = 4294950911; isPrintBitm[57] = 4294967295; 
isPrintBitm[58] = 4294961151; isPrintBitm[59] = 4294967295; isPrintBitm[60] = 4294967295; isPrintBitm[61] = 262143; 
isPrintBitm[62] = 4294967295; isPrintBitm[63] = 134217727; isPrintBitm[64] = 4294967295; isPrintBitm[65] = 2147434495; 
isPrintBitm[66] = 1342177279; isPrintBitm[67] = 2047; isPrintBitm[69] = 1071644671; isPrintBitm[70] = 4293918720; 
isPrintBitm[71] = 4294967295; isPrintBitm[72] = 4294967295; isPrintBitm[73] = 4294967295; isPrintBitm[74] = 4294967295; 
isPrintBitm[75] = 4294967295; isPrintBitm[76] = 4294549487; isPrintBitm[77] = 4089839103; isPrintBitm[78] = 2961209759; 
isPrintBitm[79] = 1073741775; isPrintBitm[80] = 4294543342; isPrintBitm[81] = 3547201023; isPrintBitm[82] = 1577204103; 
isPrintBitm[83] = 4194240; isPrintBitm[84] = 4294688750; isPrintBitm[85] = 4092460543; isPrintBitm[86] = 80831; 
isPrintBitm[87] = 4261674959; isPrintBitm[88] = 4294549486; isPrintBitm[89] = 4092460543; isPrintBitm[90] = 2965387679; 
isPrintBitm[91] = 16777167; isPrintBitm[92] = 3594373100; isPrintBitm[93] = 3288319768; isPrintBitm[94] = 8469959; 
isPrintBitm[95] = 134217664; isPrintBitm[96] = 4294828015; isPrintBitm[97] = 3825204735; isPrintBitm[98] = 123747807; 
isPrintBitm[99] = 4278255567; isPrintBitm[100] = 4294828015; isPrintBitm[101] = 4092591615; isPrintBitm[102] = 1080049119; 
isPrintBitm[103] = 458703; isPrintBitm[104] = 4294828015; isPrintBitm[105] = 4294967295; isPrintBitm[106] = 4293983711; 
isPrintBitm[107] = 4294967247; isPrintBitm[108] = 4236247020; isPrintBitm[109] = 805044223; isPrintBitm[110] = 4284449919; 
isPrintBitm[111] = 1900480; isPrintBitm[112] = 4294967294; isPrintBitm[113] = 2281701375; isPrintBitm[114] = 268435455; 
isPrintBitm[116] = 4277151126; isPrintBitm[117] = 1006628014; isPrintBitm[118] = 4093591391; isPrintBitm[120] = 4294967295; 
isPrintBitm[121] = 4294967295; isPrintBitm[122] = 4294967039; isPrintBitm[123] = 4294844415; isPrintBitm[124] = 4278190079; 
isPrintBitm[125] = 3758096383; isPrintBitm[126] = 134209535; isPrintBitm[128] = 4294967295; isPrintBitm[129] = 4294967295; 
isPrintBitm[130] = 4294967295; isPrintBitm[131] = 4294967295; isPrintBitm[132] = 4294967295; isPrintBitm[133] = 4294967295; 
isPrintBitm[134] = 4294910143; isPrintBitm[135] = 4294967295; isPrintBitm[136] = 4294967295; isPrintBitm[137] = 4294967295; 
isPrintBitm[138] = 4294967295; isPrintBitm[139] = 4294967295; isPrintBitm[140] = 4294967295; isPrintBitm[141] = 4294967295; 
isPrintBitm[142] = 4294967295; isPrintBitm[143] = 4294967295; isPrintBitm[144] = 4294967295; isPrintBitm[145] = 4294967295; 
isPrintBitm[146] = 1031749119; isPrintBitm[147] = 4294967295; isPrintBitm[148] = 4294917631; isPrintBitm[149] = 2134769663; 
isPrintBitm[150] = 4286578493; isPrintBitm[151] = 4294967295; isPrintBitm[152] = 4282253311; isPrintBitm[153] = 4294967295; 
isPrintBitm[154] = 3892314111; isPrintBitm[155] = 536870911; isPrintBitm[156] = 67108863; isPrintBitm[157] = 4294967295; 
isPrintBitm[158] = 4294967295; isPrintBitm[159] = 1061158911; isPrintBitm[160] = 4294967295; isPrintBitm[161] = 4294967295; 
isPrintBitm[162] = 4294967295; isPrintBitm[163] = 4294967295; isPrintBitm[164] = 4294967295; isPrintBitm[165] = 4294967295; 
isPrintBitm[166] = 4294967295; isPrintBitm[167] = 4294967295; isPrintBitm[168] = 4294967295; isPrintBitm[169] = 4294967295; 
isPrintBitm[170] = 4294967295; isPrintBitm[171] = 4294967295; isPrintBitm[172] = 4294967295; isPrintBitm[173] = 4294967295; 
isPrintBitm[174] = 4294967295; isPrintBitm[175] = 4294967295; isPrintBitm[176] = 4294967295; isPrintBitm[177] = 4294967295; 
isPrintBitm[178] = 4294967295; isPrintBitm[179] = 4294967295; isPrintBitm[180] = 536870911; isPrintBitm[181] = 4294967295; 
isPrintBitm[182] = 4294967295; isPrintBitm[183] = 33554431; isPrintBitm[184] = 2088959; isPrintBitm[185] = 8388607; 
isPrintBitm[186] = 1048575; isPrintBitm[187] = 909311; isPrintBitm[188] = 4294967295; isPrintBitm[189] = 4294967295; 
isPrintBitm[190] = 1073741823; isPrintBitm[191] = 67044351; isPrintBitm[192] = 67076095; isPrintBitm[193] = 4294967295; 
isPrintBitm[194] = 4294967295; isPrintBitm[195] = 16777215; isPrintBitm[196] = 4294967295; isPrintBitm[197] = 4294903807; 
isPrintBitm[198] = 4294967295; isPrintBitm[199] = 4194303; isPrintBitm[200] = 2147483647; isPrintBitm[201] = 268374015; 
isPrintBitm[202] = 4294967281; isPrintBitm[203] = 2047999; isPrintBitm[204] = 4294967295; isPrintBitm[205] = 4294905855; 
isPrintBitm[206] = 3355378687; isPrintBitm[207] = 4294967295; isPrintBitm[208] = 3489660927; isPrintBitm[209] = 4294967295; 
isPrintBitm[210] = 2147483647; isPrintBitm[211] = 2684354559; isPrintBitm[212] = 67044351; isPrintBitm[213] = 2147434495; 
isPrintBitm[216] = 4294967295; isPrintBitm[217] = 4294967295; isPrintBitm[218] = 4294905855; isPrintBitm[219] = 536870911; 
isPrintBitm[220] = 4294967295; isPrintBitm[221] = 4294967295; isPrintBitm[222] = 4294967295; isPrintBitm[223] = 4027580415; 
isPrintBitm[224] = 4294967295; isPrintBitm[225] = 4177526783; isPrintBitm[226] = 4294960127; isPrintBitm[227] = 4294967295; 
isPrintBitm[228] = 511; isPrintBitm[230] = 4294902015; isPrintBitm[231] = 67108863; isPrintBitm[232] = 4294967295; 
isPrintBitm[233] = 4294967295; isPrintBitm[234] = 4294967295; isPrintBitm[235] = 4294967295; isPrintBitm[236] = 4294967295; 
isPrintBitm[237] = 4294967295; isPrintBitm[238] = 4294967295; isPrintBitm[239] = 4227858431; isPrintBitm[240] = 4294967295; 
isPrintBitm[241] = 4294967295; isPrintBitm[242] = 4294967295; isPrintBitm[243] = 4294967295; isPrintBitm[244] = 4294967295; 
isPrintBitm[245] = 4294967295; isPrintBitm[246] = 4294967295; isPrintBitm[247] = 4294967295; isPrintBitm[248] = 1061158911; 
isPrintBitm[249] = 4294967295; isPrintBitm[250] = 2868854591; isPrintBitm[251] = 1073741823; isPrintBitm[252] = 4294967295; 
isPrintBitm[253] = 4292870143; isPrintBitm[254] = 4023386079; isPrintBitm[255] = 2145189887; isPrintBitm[256] = 4294967295; 
isPrintBitm[257] = 4294966527; isPrintBitm[258] = 4294967295; isPrintBitm[259] = 4294180831; isPrintBitm[260] = 536838143; 
isPrintBitm[261] = 4294967295; isPrintBitm[262] = 4294901760; isPrintBitm[263] = 131071; isPrintBitm[264] = 4294967295; 
isPrintBitm[265] = 4294967295; isPrintBitm[266] = 4294967295; isPrintBitm[267] = 4294967295; isPrintBitm[268] = 4294905855; 
isPrintBitm[269] = 4294967295; isPrintBitm[270] = 4294967295; isPrintBitm[271] = 4294967295; isPrintBitm[272] = 4294967295; 
isPrintBitm[273] = 4294967295; isPrintBitm[274] = 4294967295; isPrintBitm[275] = 4294967295; isPrintBitm[276] = 4294967295; 
isPrintBitm[277] = 4294967295; isPrintBitm[278] = 4294967295; isPrintBitm[279] = 4294967295; isPrintBitm[280] = 4294967295; 
isPrintBitm[281] = 4294967295; isPrintBitm[282] = 4294967295; isPrintBitm[283] = 4294967295; isPrintBitm[284] = 4294967295; 
isPrintBitm[285] = 4294967295; isPrintBitm[286] = 4294967295; isPrintBitm[287] = 4294967295; isPrintBitm[288] = 4294967295; 
isPrintBitm[289] = 127; isPrintBitm[290] = 2047; isPrintBitm[291] = 4294967295; isPrintBitm[292] = 4294967295; 
isPrintBitm[293] = 4294967295; isPrintBitm[294] = 4294967295; isPrintBitm[295] = 4294967295; isPrintBitm[296] = 4294967295; 
isPrintBitm[297] = 4294967295; isPrintBitm[298] = 4294967295; isPrintBitm[299] = 4294967295; isPrintBitm[300] = 4294967295; 
isPrintBitm[301] = 4294967295; isPrintBitm[302] = 4294967295; isPrintBitm[303] = 4294967295; isPrintBitm[304] = 4294967295; 
isPrintBitm[305] = 4294967295; isPrintBitm[306] = 4294967295; isPrintBitm[307] = 4294967295; isPrintBitm[308] = 4294967295; 
isPrintBitm[309] = 4294967295; isPrintBitm[310] = 4294967295; isPrintBitm[311] = 4294967295; isPrintBitm[312] = 4294967295; 
isPrintBitm[313] = 4294967295; isPrintBitm[314] = 4294967295; isPrintBitm[315] = 4294967295; isPrintBitm[316] = 4294967295; 
isPrintBitm[317] = 4294967295; isPrintBitm[318] = 4294967295; isPrintBitm[319] = 4294967295; isPrintBitm[320] = 4294967295; 
isPrintBitm[321] = 4294967295; isPrintBitm[322] = 4294967295; isPrintBitm[323] = 4294967295; isPrintBitm[324] = 4294967295; 
isPrintBitm[325] = 4294967295; isPrintBitm[326] = 4294967295; isPrintBitm[327] = 4294967295; isPrintBitm[328] = 4294967295; 
isPrintBitm[329] = 4294967295; isPrintBitm[330] = 4294967295; isPrintBitm[331] = 4294967295; isPrintBitm[332] = 4294967295; 
isPrintBitm[333] = 4294967295; isPrintBitm[334] = 4294967295; isPrintBitm[335] = 4294967295; isPrintBitm[336] = 4294967295; 
isPrintBitm[337] = 4294967295; isPrintBitm[338] = 4294967295; isPrintBitm[339] = 4294967295; isPrintBitm[340] = 4294967295; 
isPrintBitm[341] = 4294967295; isPrintBitm[342] = 4294967295; isPrintBitm[343] = 4294967295; isPrintBitm[344] = 4294967295; 
isPrintBitm[345] = 4294967295; isPrintBitm[346] = 4294967295; isPrintBitm[347] = 4291821567; isPrintBitm[348] = 4282384383; 
isPrintBitm[349] = 3825205247; isPrintBitm[350] = 523775; isPrintBitm[351] = 61440; isPrintBitm[352] = 4294967295; 
isPrintBitm[353] = 4294934527; isPrintBitm[354] = 2147483647; isPrintBitm[355] = 4294967295; isPrintBitm[356] = 4294967295; 
isPrintBitm[357] = 4294967295; isPrintBitm[358] = 4294967295; isPrintBitm[359] = 4262461439; isPrintBitm[360] = 4294967295; 
isPrintBitm[361] = 4294910143; isPrintBitm[362] = 4294967295; isPrintBitm[363] = 2147582207; isPrintBitm[364] = 8388607; 
isPrintBitm[365] = 2139062143; isPrintBitm[366] = 2139062143; isPrintBitm[367] = 4294967295; isPrintBitm[368] = 4294967295; 
isPrintBitm[369] = 4294967295; isPrintBitm[370] = 1023; isPrintBitm[372] = 4227858431; isPrintBitm[373] = 4294967295; 
isPrintBitm[374] = 4294967295; isPrintBitm[375] = 1048575; isPrintBitm[376] = 4294967295; isPrintBitm[377] = 4294967295; 
isPrintBitm[378] = 4294967295; isPrintBitm[379] = 4294967295; isPrintBitm[380] = 4294967295; isPrintBitm[381] = 4294967295; 
isPrintBitm[382] = 4194303; isPrintBitm[383] = 268369920; isPrintBitm[384] = 4294967295; isPrintBitm[385] = 4294967295; 
isPrintBitm[386] = 4294967294; isPrintBitm[387] = 4294967295; isPrintBitm[388] = 4269801471; isPrintBitm[389] = 4294967295; 
isPrintBitm[390] = 4294967295; isPrintBitm[391] = 4294967295; isPrintBitm[392] = 4294967264; isPrintBitm[393] = 4294868991; 
isPrintBitm[394] = 4294967295; isPrintBitm[395] = 4294967295; isPrintBitm[396] = 4294934527; isPrintBitm[397] = 134217727; 
isPrintBitm[398] = 4294967295; isPrintBitm[399] = 4294901775; isPrintBitm[400] = 2147483647; isPrintBitm[401] = 4294967295; 
isPrintBitm[402] = 4294967295; isPrintBitm[403] = 4294967295; isPrintBitm[404] = 4294967295; isPrintBitm[405] = 4294967295; 
isPrintBitm[406] = 4294967295; isPrintBitm[407] = 2147483647; isPrintBitm[408] = 4294967295; isPrintBitm[409] = 4294967295; 
isPrintBitm[410] = 4294967295; isPrintBitm[411] = 4294967295; isPrintBitm[412] = 4294967295; isPrintBitm[413] = 4294967295; 
isPrintBitm[414] = 4294967295; isPrintBitm[415] = 4294967295; isPrintBitm[416] = 4294967295; isPrintBitm[417] = 4294967295; 
isPrintBitm[418] = 4294967295; isPrintBitm[419] = 4294967295; isPrintBitm[420] = 4294967295; isPrintBitm[421] = 4294967295; 
isPrintBitm[422] = 4294967295; isPrintBitm[423] = 4294967295; isPrintBitm[424] = 4294967295; isPrintBitm[425] = 4294967295; 
isPrintBitm[426] = 4294967295; isPrintBitm[427] = 4294967295; isPrintBitm[428] = 4294967295; isPrintBitm[429] = 4294967295; 
isPrintBitm[430] = 4294967295; isPrintBitm[431] = 4294967295; isPrintBitm[432] = 4294967295; isPrintBitm[433] = 4294967295; 
isPrintBitm[434] = 4294967295; isPrintBitm[435] = 4294967295; isPrintBitm[436] = 4294967295; isPrintBitm[437] = 4294967295; 
isPrintBitm[438] = 4294967295; isPrintBitm[439] = 4294967295; isPrintBitm[440] = 4294967295; isPrintBitm[441] = 4294967295; 
isPrintBitm[442] = 4294967295; isPrintBitm[443] = 4294967295; isPrintBitm[444] = 4294967295; isPrintBitm[445] = 4294967295; 
isPrintBitm[446] = 4294967295; isPrintBitm[447] = 4294967295; isPrintBitm[448] = 4294967295; isPrintBitm[449] = 4294967295; 
isPrintBitm[450] = 4294967295; isPrintBitm[451] = 4294967295; isPrintBitm[452] = 4294967295; isPrintBitm[453] = 4294967295; 
isPrintBitm[454] = 4294967295; isPrintBitm[455] = 4294967295; isPrintBitm[456] = 4294967295; isPrintBitm[457] = 4294967295; 
isPrintBitm[458] = 4294967295; isPrintBitm[459] = 4294967295; isPrintBitm[460] = 4294967295; isPrintBitm[461] = 4294967295; 
isPrintBitm[462] = 4294967295; isPrintBitm[463] = 4294967295; isPrintBitm[464] = 4294967295; isPrintBitm[465] = 4294967295; 
isPrintBitm[466] = 4294967295; isPrintBitm[467] = 4294967295; isPrintBitm[468] = 4294967295; isPrintBitm[469] = 4294967295; 
isPrintBitm[470] = 4294967295; isPrintBitm[471] = 4294967295; isPrintBitm[472] = 4294967295; isPrintBitm[473] = 4294967295; 
isPrintBitm[474] = 4294967295; isPrintBitm[475] = 4294967295; isPrintBitm[476] = 4294967295; isPrintBitm[477] = 4294967295; 
isPrintBitm[478] = 4294967295; isPrintBitm[479] = 4294967295; isPrintBitm[480] = 4294967295; isPrintBitm[481] = 4294967295; 
isPrintBitm[482] = 4294967295; isPrintBitm[483] = 4294967295; isPrintBitm[484] = 4294967295; isPrintBitm[485] = 4294967295; 
isPrintBitm[486] = 4294967295; isPrintBitm[487] = 4294967295; isPrintBitm[488] = 4294967295; isPrintBitm[489] = 4294967295; 
isPrintBitm[490] = 4294967295; isPrintBitm[491] = 4294967295; isPrintBitm[492] = 4294967295; isPrintBitm[493] = 4294967295; 
isPrintBitm[494] = 4294967295; isPrintBitm[495] = 4294967295; isPrintBitm[496] = 4294967295; isPrintBitm[497] = 4294967295; 
isPrintBitm[498] = 4294967295; isPrintBitm[499] = 4294967295; isPrintBitm[500] = 4294967295; isPrintBitm[501] = 4294967295; 
isPrintBitm[502] = 4294967295; isPrintBitm[503] = 4294967295; isPrintBitm[504] = 4294967295; isPrintBitm[505] = 4294967295; 
isPrintBitm[506] = 4294967295; isPrintBitm[507] = 4294967295; isPrintBitm[508] = 4294967295; isPrintBitm[509] = 4294967295; 
isPrintBitm[510] = 4294967295; isPrintBitm[511] = 4294967295; isPrintBitm[512] = 4294967295; isPrintBitm[513] = 4294967295; 
isPrintBitm[514] = 4294967295; isPrintBitm[515] = 4294967295; isPrintBitm[516] = 4294967295; isPrintBitm[517] = 4294967295; 
isPrintBitm[518] = 4294967295; isPrintBitm[519] = 4294967295; isPrintBitm[520] = 4294967295; isPrintBitm[521] = 4294967295; 
isPrintBitm[522] = 4294967295; isPrintBitm[523] = 4294967295; isPrintBitm[524] = 4294967295; isPrintBitm[525] = 4294967295; 
isPrintBitm[526] = 4294967295; isPrintBitm[527] = 4294967295; isPrintBitm[528] = 4294967295; isPrintBitm[529] = 4294967295; 
isPrintBitm[530] = 4294967295; isPrintBitm[531] = 4294967295; isPrintBitm[532] = 4294967295; isPrintBitm[533] = 4294967295; 
isPrintBitm[534] = 4294967295; isPrintBitm[535] = 4294967295; isPrintBitm[536] = 4294967295; isPrintBitm[537] = 4294967295; 
isPrintBitm[538] = 4294967295; isPrintBitm[539] = 4294967295; isPrintBitm[540] = 4294967295; isPrintBitm[541] = 4294967295; 
isPrintBitm[542] = 4294967295; isPrintBitm[543] = 4294967295; isPrintBitm[544] = 4294967295; isPrintBitm[545] = 4294967295; 
isPrintBitm[546] = 4294967295; isPrintBitm[547] = 4294967295; isPrintBitm[548] = 4294967295; isPrintBitm[549] = 4294967295; 
isPrintBitm[550] = 4294967295; isPrintBitm[551] = 4294967295; isPrintBitm[552] = 4294967295; isPrintBitm[553] = 4294967295; 
isPrintBitm[554] = 4294967295; isPrintBitm[555] = 4294967295; isPrintBitm[556] = 4294967295; isPrintBitm[557] = 4294967295; 
isPrintBitm[558] = 4294967295; isPrintBitm[559] = 4294967295; isPrintBitm[560] = 4294967295; isPrintBitm[561] = 4294967295; 
isPrintBitm[562] = 4294967295; isPrintBitm[563] = 4294967295; isPrintBitm[564] = 4294967295; isPrintBitm[565] = 4294967295; 
isPrintBitm[566] = 4294967295; isPrintBitm[567] = 4294967295; isPrintBitm[568] = 4294967295; isPrintBitm[569] = 4294967295; 
isPrintBitm[570] = 4294967295; isPrintBitm[571] = 4294967295; isPrintBitm[572] = 4294967295; isPrintBitm[573] = 4294967295; 
isPrintBitm[574] = 4294967295; isPrintBitm[575] = 4294967295; isPrintBitm[576] = 4294967295; isPrintBitm[577] = 4294967295; 
isPrintBitm[578] = 4294967295; isPrintBitm[579] = 4294967295; isPrintBitm[580] = 4294967295; isPrintBitm[581] = 4294967295; 
isPrintBitm[582] = 4294967295; isPrintBitm[583] = 4294967295; isPrintBitm[584] = 4294967295; isPrintBitm[585] = 4294967295; 
isPrintBitm[586] = 4294967295; isPrintBitm[587] = 4294967295; isPrintBitm[588] = 4294967295; isPrintBitm[589] = 4294967295; 
isPrintBitm[590] = 4294967295; isPrintBitm[591] = 4294967295; isPrintBitm[592] = 4294967295; isPrintBitm[593] = 4294967295; 
isPrintBitm[594] = 4294967295; isPrintBitm[595] = 4294967295; isPrintBitm[596] = 4294967295; isPrintBitm[597] = 4294967295; 
isPrintBitm[598] = 4294967295; isPrintBitm[599] = 4294967295; isPrintBitm[600] = 4294967295; isPrintBitm[601] = 4294967295; 
isPrintBitm[602] = 4294967295; isPrintBitm[603] = 4294967295; isPrintBitm[604] = 4294967295; isPrintBitm[605] = 4294967295; 
isPrintBitm[606] = 4294967295; isPrintBitm[607] = 4294967295; isPrintBitm[608] = 4294967295; isPrintBitm[609] = 4294967295; 
isPrintBitm[610] = 4294967295; isPrintBitm[611] = 4294967295; isPrintBitm[612] = 4294967295; isPrintBitm[613] = 4294967295; 
isPrintBitm[614] = 4294967295; isPrintBitm[615] = 4294967295; isPrintBitm[616] = 4294967295; isPrintBitm[617] = 4294967295; 
isPrintBitm[618] = 4294967295; isPrintBitm[619] = 4294967295; isPrintBitm[620] = 4294967295; isPrintBitm[621] = 4194303; 
isPrintBitm[622] = 4294967295; isPrintBitm[623] = 4294967295; isPrintBitm[624] = 4294967295; isPrintBitm[625] = 4294967295; 
isPrintBitm[626] = 4294967295; isPrintBitm[627] = 4294967295; isPrintBitm[628] = 4294967295; isPrintBitm[629] = 4294967295; 
isPrintBitm[630] = 4294967295; isPrintBitm[631] = 4294967295; isPrintBitm[632] = 4294967295; isPrintBitm[633] = 4294967295; 
isPrintBitm[634] = 4294967295; isPrintBitm[635] = 4294967295; isPrintBitm[636] = 4294967295; isPrintBitm[637] = 4294967295; 
isPrintBitm[638] = 4294967295; isPrintBitm[639] = 4294967295; isPrintBitm[640] = 4294967295; isPrintBitm[641] = 4294967295; 
isPrintBitm[642] = 4294967295; isPrintBitm[643] = 4294967295; isPrintBitm[644] = 4294967295; isPrintBitm[645] = 4294967295; 
isPrintBitm[646] = 4294967295; isPrintBitm[647] = 4294967295; isPrintBitm[648] = 4294967295; isPrintBitm[649] = 4294967295; 
isPrintBitm[650] = 4294967295; isPrintBitm[651] = 4294967295; isPrintBitm[652] = 4294967295; isPrintBitm[653] = 4294967295; 
isPrintBitm[654] = 4294967295; isPrintBitm[655] = 4294967295; isPrintBitm[656] = 4294967295; isPrintBitm[657] = 4294967295; 
isPrintBitm[658] = 4294967295; isPrintBitm[659] = 4294967295; isPrintBitm[660] = 4294967295; isPrintBitm[661] = 4294967295; 
isPrintBitm[662] = 4294967295; isPrintBitm[663] = 4294967295; isPrintBitm[664] = 4294967295; isPrintBitm[665] = 4294967295; 
isPrintBitm[666] = 4294967295; isPrintBitm[667] = 4294967295; isPrintBitm[668] = 4294967295; isPrintBitm[669] = 4294967295; 
isPrintBitm[670] = 4294967295; isPrintBitm[671] = 4294967295; isPrintBitm[672] = 4294967295; isPrintBitm[673] = 4294967295; 
isPrintBitm[674] = 4294967295; isPrintBitm[675] = 4294967295; isPrintBitm[676] = 4294967295; isPrintBitm[677] = 4294967295; 
isPrintBitm[678] = 4294967295; isPrintBitm[679] = 4294967295; isPrintBitm[680] = 4294967295; isPrintBitm[681] = 4294967295; 
isPrintBitm[682] = 4294967295; isPrintBitm[683] = 4294967295; isPrintBitm[684] = 4294967295; isPrintBitm[685] = 4294967295; 
isPrintBitm[686] = 4294967295; isPrintBitm[687] = 4294967295; isPrintBitm[688] = 4294967295; isPrintBitm[689] = 4294967295; 
isPrintBitm[690] = 4294967295; isPrintBitm[691] = 4294967295; isPrintBitm[692] = 4294967295; isPrintBitm[693] = 4294967295; 
isPrintBitm[694] = 4294967295; isPrintBitm[695] = 4294967295; isPrintBitm[696] = 4294967295; isPrintBitm[697] = 4294967295; 
isPrintBitm[698] = 4294967295; isPrintBitm[699] = 4294967295; isPrintBitm[700] = 4294967295; isPrintBitm[701] = 4294967295; 
isPrintBitm[702] = 4294967295; isPrintBitm[703] = 4294967295; isPrintBitm[704] = 4294967295; isPrintBitm[705] = 4294967295; 
isPrintBitm[706] = 4294967295; isPrintBitm[707] = 4294967295; isPrintBitm[708] = 4294967295; isPrintBitm[709] = 4294967295; 
isPrintBitm[710] = 4294967295; isPrintBitm[711] = 4294967295; isPrintBitm[712] = 4294967295; isPrintBitm[713] = 4294967295; 
isPrintBitm[714] = 4294967295; isPrintBitm[715] = 4294967295; isPrintBitm[716] = 4294967295; isPrintBitm[717] = 4294967295; 
isPrintBitm[718] = 4294967295; isPrintBitm[719] = 4294967295; isPrintBitm[720] = 4294967295; isPrintBitm[721] = 4294967295; 
isPrintBitm[722] = 4294967295; isPrintBitm[723] = 4294967295; isPrintBitm[724] = 4294967295; isPrintBitm[725] = 4294967295; 
isPrintBitm[726] = 4294967295; isPrintBitm[727] = 4294967295; isPrintBitm[728] = 4294967295; isPrintBitm[729] = 4294967295; 
isPrintBitm[730] = 4294967295; isPrintBitm[731] = 4294967295; isPrintBitm[732] = 4294967295; isPrintBitm[733] = 4294967295; 
isPrintBitm[734] = 4294967295; isPrintBitm[735] = 4294967295; isPrintBitm[736] = 4294967295; isPrintBitm[737] = 4294967295; 
isPrintBitm[738] = 4294967295; isPrintBitm[739] = 4294967295; isPrintBitm[740] = 4294967295; isPrintBitm[741] = 4294967295; 
isPrintBitm[742] = 4294967295; isPrintBitm[743] = 4294967295; isPrintBitm[744] = 4294967295; isPrintBitm[745] = 4294967295; 
isPrintBitm[746] = 4294967295; isPrintBitm[747] = 4294967295; isPrintBitm[748] = 4294967295; isPrintBitm[749] = 4294967295; 
isPrintBitm[750] = 4294967295; isPrintBitm[751] = 4294967295; isPrintBitm[752] = 4294967295; isPrintBitm[753] = 4294967295; 
isPrintBitm[754] = 4294967295; isPrintBitm[755] = 4294967295; isPrintBitm[756] = 4294967295; isPrintBitm[757] = 4294967295; 
isPrintBitm[758] = 4294967295; isPrintBitm[759] = 4294967295; isPrintBitm[760] = 4294967295; isPrintBitm[761] = 4294967295; 
isPrintBitm[762] = 4294967295; isPrintBitm[763] = 4294967295; isPrintBitm[764] = 4294967295; isPrintBitm[765] = 4294967295; 
isPrintBitm[766] = 4294967295; isPrintBitm[767] = 4294967295; isPrintBitm[768] = 4294967295; isPrintBitm[769] = 4294967295; 
isPrintBitm[770] = 4294967295; isPrintBitm[771] = 4294967295; isPrintBitm[772] = 4294967295; isPrintBitm[773] = 4294967295; 
isPrintBitm[774] = 4294967295; isPrintBitm[775] = 4294967295; isPrintBitm[776] = 4294967295; isPrintBitm[777] = 4294967295; 
isPrintBitm[778] = 4294967295; isPrintBitm[779] = 4294967295; isPrintBitm[780] = 4294967295; isPrintBitm[781] = 4294967295; 
isPrintBitm[782] = 4294967295; isPrintBitm[783] = 4294967295; isPrintBitm[784] = 4294967295; isPrintBitm[785] = 4294967295; 
isPrintBitm[786] = 4294967295; isPrintBitm[787] = 4294967295; isPrintBitm[788] = 4294967295; isPrintBitm[789] = 4294967295; 
isPrintBitm[790] = 4294967295; isPrintBitm[791] = 4294967295; isPrintBitm[792] = 4294967295; isPrintBitm[793] = 4294967295; 
isPrintBitm[794] = 4294967295; isPrintBitm[795] = 4294967295; isPrintBitm[796] = 4294967295; isPrintBitm[797] = 4294967295; 
isPrintBitm[798] = 4294967295; isPrintBitm[799] = 4294967295; isPrintBitm[800] = 4294967295; isPrintBitm[801] = 4294967295; 
isPrintBitm[802] = 4294967295; isPrintBitm[803] = 4294967295; isPrintBitm[804] = 4294967295; isPrintBitm[805] = 4294967295; 
isPrintBitm[806] = 4294967295; isPrintBitm[807] = 4294967295; isPrintBitm[808] = 4294967295; isPrintBitm[809] = 4294967295; 
isPrintBitm[810] = 4294967295; isPrintBitm[811] = 4294967295; isPrintBitm[812] = 4294967295; isPrintBitm[813] = 4294967295; 
isPrintBitm[814] = 4294967295; isPrintBitm[815] = 4294967295; isPrintBitm[816] = 4294967295; isPrintBitm[817] = 4294967295; 
isPrintBitm[818] = 4294967295; isPrintBitm[819] = 4294967295; isPrintBitm[820] = 4294967295; isPrintBitm[821] = 4294967295; 
isPrintBitm[822] = 4294967295; isPrintBitm[823] = 4294967295; isPrintBitm[824] = 4294967295; isPrintBitm[825] = 4294967295; 
isPrintBitm[826] = 4294967295; isPrintBitm[827] = 4294967295; isPrintBitm[828] = 4294967295; isPrintBitm[829] = 4294967295; 
isPrintBitm[830] = 4294967295; isPrintBitm[831] = 4294967295; isPrintBitm[832] = 4294967295; isPrintBitm[833] = 4294967295; 
isPrintBitm[834] = 4294967295; isPrintBitm[835] = 4294967295; isPrintBitm[836] = 4294967295; isPrintBitm[837] = 4294967295; 
isPrintBitm[838] = 4294967295; isPrintBitm[839] = 4294967295; isPrintBitm[840] = 4294967295; isPrintBitm[841] = 4294967295; 
isPrintBitm[842] = 4294967295; isPrintBitm[843] = 4294967295; isPrintBitm[844] = 4294967295; isPrintBitm[845] = 4294967295; 
isPrintBitm[846] = 4294967295; isPrintBitm[847] = 4294967295; isPrintBitm[848] = 4294967295; isPrintBitm[849] = 4294967295; 
isPrintBitm[850] = 4294967295; isPrintBitm[851] = 4294967295; isPrintBitm[852] = 4294967295; isPrintBitm[853] = 4294967295; 
isPrintBitm[854] = 4294967295; isPrintBitm[855] = 4294967295; isPrintBitm[856] = 4294967295; isPrintBitm[857] = 4294967295; 
isPrintBitm[858] = 4294967295; isPrintBitm[859] = 4294967295; isPrintBitm[860] = 4294967295; isPrintBitm[861] = 4294967295; 
isPrintBitm[862] = 4294967295; isPrintBitm[863] = 4294967295; isPrintBitm[864] = 4294967295; isPrintBitm[865] = 4294967295; 
isPrintBitm[866] = 4294967295; isPrintBitm[867] = 4294967295; isPrintBitm[868] = 4294967295; isPrintBitm[869] = 4294967295; 
isPrintBitm[870] = 4294967295; isPrintBitm[871] = 4294967295; isPrintBitm[872] = 4294967295; isPrintBitm[873] = 4294967295; 
isPrintBitm[874] = 4294967295; isPrintBitm[875] = 4294967295; isPrintBitm[876] = 4294967295; isPrintBitm[877] = 4294967295; 
isPrintBitm[878] = 4294967295; isPrintBitm[879] = 4294967295; isPrintBitm[880] = 4294967295; isPrintBitm[881] = 4294967295; 
isPrintBitm[882] = 4294967295; isPrintBitm[883] = 4294967295; isPrintBitm[884] = 4294967295; isPrintBitm[885] = 4294967295; 
isPrintBitm[886] = 4294967295; isPrintBitm[887] = 4294967295; isPrintBitm[888] = 4294967295; isPrintBitm[889] = 4294967295; 
isPrintBitm[890] = 4294967295; isPrintBitm[891] = 4294967295; isPrintBitm[892] = 4294967295; isPrintBitm[893] = 4294967295; 
isPrintBitm[894] = 4294967295; isPrintBitm[895] = 4294967295; isPrintBitm[896] = 4294967295; isPrintBitm[897] = 4294967295; 
isPrintBitm[898] = 4294967295; isPrintBitm[899] = 4294967295; isPrintBitm[900] = 4294967295; isPrintBitm[901] = 4294967295; 
isPrintBitm[902] = 4294967295; isPrintBitm[903] = 4294967295; isPrintBitm[904] = 4294967295; isPrintBitm[905] = 4294967295; 
isPrintBitm[906] = 4294967295; isPrintBitm[907] = 4294967295; isPrintBitm[908] = 4294967295; isPrintBitm[909] = 4294967295; 
isPrintBitm[910] = 4294967295; isPrintBitm[911] = 4294967295; isPrintBitm[912] = 4294967295; isPrintBitm[913] = 4294967295; 
isPrintBitm[914] = 4294967295; isPrintBitm[915] = 4294967295; isPrintBitm[916] = 4294967295; isPrintBitm[917] = 4294967295; 
isPrintBitm[918] = 4294967295; isPrintBitm[919] = 4294967295; isPrintBitm[920] = 4294967295; isPrintBitm[921] = 4294967295; 
isPrintBitm[922] = 4294967295; isPrintBitm[923] = 4294967295; isPrintBitm[924] = 4294967295; isPrintBitm[925] = 4294967295; 
isPrintBitm[926] = 4294967295; isPrintBitm[927] = 4294967295; isPrintBitm[928] = 4294967295; isPrintBitm[929] = 4294967295; 
isPrintBitm[930] = 4294967295; isPrintBitm[931] = 4294967295; isPrintBitm[932] = 4294967295; isPrintBitm[933] = 4294967295; 
isPrintBitm[934] = 4294967295; isPrintBitm[935] = 4294967295; isPrintBitm[936] = 4294967295; isPrintBitm[937] = 4294967295; 
isPrintBitm[938] = 4294967295; isPrintBitm[939] = 4294967295; isPrintBitm[940] = 4294967295; isPrintBitm[941] = 4294967295; 
isPrintBitm[942] = 4294967295; isPrintBitm[943] = 4294967295; isPrintBitm[944] = 4294967295; isPrintBitm[945] = 4294967295; 
isPrintBitm[946] = 4294967295; isPrintBitm[947] = 4294967295; isPrintBitm[948] = 4294967295; isPrintBitm[949] = 4294967295; 
isPrintBitm[950] = 4294967295; isPrintBitm[951] = 4294967295; isPrintBitm[952] = 4294967295; isPrintBitm[953] = 4294967295; 
isPrintBitm[954] = 4294967295; isPrintBitm[955] = 4294967295; isPrintBitm[956] = 4294967295; isPrintBitm[957] = 4294967295; 
isPrintBitm[958] = 4294967295; isPrintBitm[959] = 4294967295; isPrintBitm[960] = 4294967295; isPrintBitm[961] = 4294967295; 
isPrintBitm[962] = 4294967295; isPrintBitm[963] = 4294967295; isPrintBitm[964] = 4294967295; isPrintBitm[965] = 4294967295; 
isPrintBitm[966] = 4294967295; isPrintBitm[967] = 4294967295; isPrintBitm[968] = 4294967295; isPrintBitm[969] = 4294967295; 
isPrintBitm[970] = 4294967295; isPrintBitm[971] = 4294967295; isPrintBitm[972] = 4294967295; isPrintBitm[973] = 4294967295; 
isPrintBitm[974] = 4294967295; isPrintBitm[975] = 4294967295; isPrintBitm[976] = 4294967295; isPrintBitm[977] = 4294967295; 
isPrintBitm[978] = 4294967295; isPrintBitm[979] = 4294967295; isPrintBitm[980] = 4294967295; isPrintBitm[981] = 4294967295; 
isPrintBitm[982] = 4294967295; isPrintBitm[983] = 4294967295; isPrintBitm[984] = 4294967295; isPrintBitm[985] = 4294967295; 
isPrintBitm[986] = 4294967295; isPrintBitm[987] = 4294967295; isPrintBitm[988] = 4294967295; isPrintBitm[989] = 4294967295; 
isPrintBitm[990] = 4294967295; isPrintBitm[991] = 4294967295; isPrintBitm[992] = 4294967295; isPrintBitm[993] = 4294967295; 
isPrintBitm[994] = 4294967295; isPrintBitm[995] = 4294967295; isPrintBitm[996] = 4294967295; isPrintBitm[997] = 4294967295; 
isPrintBitm[998] = 4294967295; isPrintBitm[999] = 4294967295; isPrintBitm[1000] = 4294967295; isPrintBitm[1001] = 4294967295; 
isPrintBitm[1002] = 4294967295; isPrintBitm[1003] = 4294967295; isPrintBitm[1004] = 4294967295; isPrintBitm[1005] = 4294967295; 
isPrintBitm[1006] = 4294967295; isPrintBitm[1007] = 4294967295; isPrintBitm[1008] = 4294967295; isPrintBitm[1009] = 4294967295; 
isPrintBitm[1010] = 4294967295; isPrintBitm[1011] = 4294967295; isPrintBitm[1012] = 4294967295; isPrintBitm[1013] = 4294967295; 
isPrintBitm[1014] = 4294967295; isPrintBitm[1015] = 4294967295; isPrintBitm[1016] = 4294967295; isPrintBitm[1017] = 4294967295; 
isPrintBitm[1018] = 4294967295; isPrintBitm[1019] = 4294967295; isPrintBitm[1020] = 4294967295; isPrintBitm[1021] = 4294967295; 
isPrintBitm[1022] = 4294967295; isPrintBitm[1023] = 4294967295; isPrintBitm[1024] = 4294967295; isPrintBitm[1025] = 4294967295; 
isPrintBitm[1026] = 4294967295; isPrintBitm[1027] = 4294967295; isPrintBitm[1028] = 4294967295; isPrintBitm[1029] = 4294967295; 
isPrintBitm[1030] = 4294967295; isPrintBitm[1031] = 4294967295; isPrintBitm[1032] = 4294967295; isPrintBitm[1033] = 4294967295; 
isPrintBitm[1034] = 4294967295; isPrintBitm[1035] = 4294967295; isPrintBitm[1036] = 4294967295; isPrintBitm[1037] = 4294967295; 
isPrintBitm[1038] = 4294967295; isPrintBitm[1039] = 4294967295; isPrintBitm[1040] = 4294967295; isPrintBitm[1041] = 4294967295; 
isPrintBitm[1042] = 4294967295; isPrintBitm[1043] = 4294967295; isPrintBitm[1044] = 4294967295; isPrintBitm[1045] = 4294967295; 
isPrintBitm[1046] = 4294967295; isPrintBitm[1047] = 4294967295; isPrintBitm[1048] = 4294967295; isPrintBitm[1049] = 4294967295; 
isPrintBitm[1050] = 4294967295; isPrintBitm[1051] = 4294967295; isPrintBitm[1052] = 4294967295; isPrintBitm[1053] = 4294967295; 
isPrintBitm[1054] = 4294967295; isPrintBitm[1055] = 4294967295; isPrintBitm[1056] = 4294967295; isPrintBitm[1057] = 4294967295; 
isPrintBitm[1058] = 4294967295; isPrintBitm[1059] = 4294967295; isPrintBitm[1060] = 4294967295; isPrintBitm[1061] = 4294967295; 
isPrintBitm[1062] = 4294967295; isPrintBitm[1063] = 4294967295; isPrintBitm[1064] = 4294967295; isPrintBitm[1065] = 4294967295; 
isPrintBitm[1066] = 4294967295; isPrintBitm[1067] = 4294967295; isPrintBitm[1068] = 4294967295; isPrintBitm[1069] = 4294967295; 
isPrintBitm[1070] = 4294967295; isPrintBitm[1071] = 4294967295; isPrintBitm[1072] = 4294967295; isPrintBitm[1073] = 4294967295; 
isPrintBitm[1074] = 4294967295; isPrintBitm[1075] = 4294967295; isPrintBitm[1076] = 4294967295; isPrintBitm[1077] = 4294967295; 
isPrintBitm[1078] = 4294967295; isPrintBitm[1079] = 4294967295; isPrintBitm[1080] = 4294967295; isPrintBitm[1081] = 4294967295; 
isPrintBitm[1082] = 4294967295; isPrintBitm[1083] = 4294967295; isPrintBitm[1084] = 4294967295; isPrintBitm[1085] = 4294967295; 
isPrintBitm[1086] = 4294967295; isPrintBitm[1087] = 4294967295; isPrintBitm[1088] = 4294967295; isPrintBitm[1089] = 4294967295; 
isPrintBitm[1090] = 4294967295; isPrintBitm[1091] = 4294967295; isPrintBitm[1092] = 4294967295; isPrintBitm[1093] = 4294967295; 
isPrintBitm[1094] = 4294967295; isPrintBitm[1095] = 4294967295; isPrintBitm[1096] = 4294967295; isPrintBitm[1097] = 4294967295; 
isPrintBitm[1098] = 4294967295; isPrintBitm[1099] = 4294967295; isPrintBitm[1100] = 4294967295; isPrintBitm[1101] = 4294967295; 
isPrintBitm[1102] = 4294967295; isPrintBitm[1103] = 4294967295; isPrintBitm[1104] = 4294967295; isPrintBitm[1105] = 4294967295; 
isPrintBitm[1106] = 4294967295; isPrintBitm[1107] = 4294967295; isPrintBitm[1108] = 4294967295; isPrintBitm[1109] = 4294967295; 
isPrintBitm[1110] = 4294967295; isPrintBitm[1111] = 4294967295; isPrintBitm[1112] = 4294967295; isPrintBitm[1113] = 4294967295; 
isPrintBitm[1114] = 4294967295; isPrintBitm[1115] = 4294967295; isPrintBitm[1116] = 4294967295; isPrintBitm[1117] = 4294967295; 
isPrintBitm[1118] = 4294967295; isPrintBitm[1119] = 4294967295; isPrintBitm[1120] = 4294967295; isPrintBitm[1121] = 4294967295; 
isPrintBitm[1122] = 4294967295; isPrintBitm[1123] = 4294967295; isPrintBitm[1124] = 4294967295; isPrintBitm[1125] = 4294967295; 
isPrintBitm[1126] = 4294967295; isPrintBitm[1127] = 4294967295; isPrintBitm[1128] = 4294967295; isPrintBitm[1129] = 4294967295; 
isPrintBitm[1130] = 4294967295; isPrintBitm[1131] = 4294967295; isPrintBitm[1132] = 4294967295; isPrintBitm[1133] = 4294967295; 
isPrintBitm[1134] = 4294967295; isPrintBitm[1135] = 4294967295; isPrintBitm[1136] = 4294967295; isPrintBitm[1137] = 4294967295; 
isPrintBitm[1138] = 4294967295; isPrintBitm[1139] = 4294967295; isPrintBitm[1140] = 4294967295; isPrintBitm[1141] = 4294967295; 
isPrintBitm[1142] = 4294967295; isPrintBitm[1143] = 4294967295; isPrintBitm[1144] = 4294967295; isPrintBitm[1145] = 4294967295; 
isPrintBitm[1146] = 4294967295; isPrintBitm[1147] = 4294967295; isPrintBitm[1148] = 4294967295; isPrintBitm[1149] = 4294967295; 
isPrintBitm[1150] = 4294967295; isPrintBitm[1151] = 4294967295; isPrintBitm[1152] = 4294967295; isPrintBitm[1153] = 4294967295; 
isPrintBitm[1154] = 4294967295; isPrintBitm[1155] = 4294967295; isPrintBitm[1156] = 4294967295; isPrintBitm[1157] = 4294967295; 
isPrintBitm[1158] = 4294967295; isPrintBitm[1159] = 4294967295; isPrintBitm[1160] = 4294967295; isPrintBitm[1161] = 4294967295; 
isPrintBitm[1162] = 4294967295; isPrintBitm[1163] = 4294967295; isPrintBitm[1164] = 4294967295; isPrintBitm[1165] = 4294967295; 
isPrintBitm[1166] = 4294967295; isPrintBitm[1167] = 4294967295; isPrintBitm[1168] = 4294967295; isPrintBitm[1169] = 4294967295; 
isPrintBitm[1170] = 4294967295; isPrintBitm[1171] = 4294967295; isPrintBitm[1172] = 4294967295; isPrintBitm[1173] = 4294967295; 
isPrintBitm[1174] = 4294967295; isPrintBitm[1175] = 4294967295; isPrintBitm[1176] = 4294967295; isPrintBitm[1177] = 4294967295; 
isPrintBitm[1178] = 4294967295; isPrintBitm[1179] = 4294967295; isPrintBitm[1180] = 4294967295; isPrintBitm[1181] = 4294967295; 
isPrintBitm[1182] = 4294967295; isPrintBitm[1183] = 4294967295; isPrintBitm[1184] = 4294967295; isPrintBitm[1185] = 4294967295; 
isPrintBitm[1186] = 4294967295; isPrintBitm[1187] = 4294967295; isPrintBitm[1188] = 4294967295; isPrintBitm[1189] = 4294967295; 
isPrintBitm[1190] = 4294967295; isPrintBitm[1191] = 4294967295; isPrintBitm[1192] = 4294967295; isPrintBitm[1193] = 4294967295; 
isPrintBitm[1194] = 4294967295; isPrintBitm[1195] = 4294967295; isPrintBitm[1196] = 4294967295; isPrintBitm[1197] = 4294967295; 
isPrintBitm[1198] = 4294967295; isPrintBitm[1199] = 4294967295; isPrintBitm[1200] = 4294967295; isPrintBitm[1201] = 4294967295; 
isPrintBitm[1202] = 4294967295; isPrintBitm[1203] = 4294967295; isPrintBitm[1204] = 4294967295; isPrintBitm[1205] = 4294967295; 
isPrintBitm[1206] = 4294967295; isPrintBitm[1207] = 4294967295; isPrintBitm[1208] = 4294967295; isPrintBitm[1209] = 4294967295; 
isPrintBitm[1210] = 4294967295; isPrintBitm[1211] = 4294967295; isPrintBitm[1212] = 4294967295; isPrintBitm[1213] = 4294967295; 
isPrintBitm[1214] = 4294967295; isPrintBitm[1215] = 4294967295; isPrintBitm[1216] = 4294967295; isPrintBitm[1217] = 4294967295; 
isPrintBitm[1218] = 4294967295; isPrintBitm[1219] = 4294967295; isPrintBitm[1220] = 4294967295; isPrintBitm[1221] = 4294967295; 
isPrintBitm[1222] = 4294967295; isPrintBitm[1223] = 4294967295; isPrintBitm[1224] = 4294967295; isPrintBitm[1225] = 4294967295; 
isPrintBitm[1226] = 4294967295; isPrintBitm[1227] = 4294967295; isPrintBitm[1228] = 4294967295; isPrintBitm[1229] = 4294967295; 
isPrintBitm[1230] = 4294967295; isPrintBitm[1231] = 4294967295; isPrintBitm[1232] = 4294967295; isPrintBitm[1233] = 4294967295; 
isPrintBitm[1234] = 4294967295; isPrintBitm[1235] = 4294967295; isPrintBitm[1236] = 4294967295; isPrintBitm[1237] = 4294967295; 
isPrintBitm[1238] = 4294967295; isPrintBitm[1239] = 4294967295; isPrintBitm[1240] = 4294967295; isPrintBitm[1241] = 4294967295; 
isPrintBitm[1242] = 4294967295; isPrintBitm[1243] = 4294967295; isPrintBitm[1244] = 4294967295; isPrintBitm[1245] = 4294967295; 
isPrintBitm[1246] = 4294967295; isPrintBitm[1247] = 4294967295; isPrintBitm[1248] = 4294967295; isPrintBitm[1249] = 4294967295; 
isPrintBitm[1250] = 4294967295; isPrintBitm[1251] = 4294967295; isPrintBitm[1252] = 4294967295; isPrintBitm[1253] = 4294967295; 
isPrintBitm[1254] = 4294967295; isPrintBitm[1255] = 4294967295; isPrintBitm[1256] = 4294967295; isPrintBitm[1257] = 4294967295; 
isPrintBitm[1258] = 4294967295; isPrintBitm[1259] = 4294967295; isPrintBitm[1260] = 4294967295; isPrintBitm[1261] = 4294967295; 
isPrintBitm[1262] = 4294967295; isPrintBitm[1263] = 4294967295; isPrintBitm[1264] = 4294967295; isPrintBitm[1265] = 4294967295; 
isPrintBitm[1266] = 4294967295; isPrintBitm[1267] = 4294967295; isPrintBitm[1268] = 4294967295; isPrintBitm[1269] = 4294967295; 
isPrintBitm[1270] = 4294967295; isPrintBitm[1271] = 4294967295; isPrintBitm[1272] = 4294967295; isPrintBitm[1273] = 4294967295; 
isPrintBitm[1274] = 4294967295; isPrintBitm[1275] = 4294967295; isPrintBitm[1276] = 4294967295; isPrintBitm[1277] = 4294967295; 
isPrintBitm[1278] = 4294967295; isPrintBitm[1279] = 2047; isPrintBitm[1280] = 4294967295; isPrintBitm[1281] = 4294967295; 
isPrintBitm[1282] = 4294967295; isPrintBitm[1283] = 4294967295; isPrintBitm[1284] = 4294967295; isPrintBitm[1285] = 4294967295; 
isPrintBitm[1286] = 4294967295; isPrintBitm[1287] = 4294967295; isPrintBitm[1288] = 4294967295; isPrintBitm[1289] = 4294967295; 
isPrintBitm[1290] = 4294967295; isPrintBitm[1291] = 4294967295; isPrintBitm[1292] = 4294967295; isPrintBitm[1293] = 4294967295; 
isPrintBitm[1294] = 4294967295; isPrintBitm[1295] = 4294967295; isPrintBitm[1296] = 4294967295; isPrintBitm[1297] = 4294967295; 
isPrintBitm[1298] = 4294967295; isPrintBitm[1299] = 4294967295; isPrintBitm[1300] = 4294967295; isPrintBitm[1301] = 4294967295; 
isPrintBitm[1302] = 4294967295; isPrintBitm[1303] = 4294967295; isPrintBitm[1304] = 4294967295; isPrintBitm[1305] = 4294967295; 
isPrintBitm[1306] = 4294967295; isPrintBitm[1307] = 4294967295; isPrintBitm[1308] = 4294967295; isPrintBitm[1309] = 4294967295; 
isPrintBitm[1310] = 4294967295; isPrintBitm[1311] = 4294967295; isPrintBitm[1312] = 4294967295; isPrintBitm[1313] = 4294967295; 
isPrintBitm[1314] = 4294967295; isPrintBitm[1315] = 4294967295; isPrintBitm[1316] = 4294909951; isPrintBitm[1317] = 4294967295; 
isPrintBitm[1318] = 4294901887; isPrintBitm[1319] = 4294967295; isPrintBitm[1320] = 4294967295; isPrintBitm[1321] = 4294967295; 
isPrintBitm[1322] = 4294967295; isPrintBitm[1323] = 4294967295; isPrintBitm[1324] = 4294967295; isPrintBitm[1325] = 4294967295; 
isPrintBitm[1326] = 4294967295; isPrintBitm[1327] = 4294967295; isPrintBitm[1328] = 4294967295; isPrintBitm[1329] = 4095; 
isPrintBitm[1330] = 4294967295; isPrintBitm[1331] = 4294967295; isPrintBitm[1332] = 4294967295; isPrintBitm[1333] = 4294967295; 
isPrintBitm[1334] = 4294967295; isPrintBitm[1335] = 16777215; isPrintBitm[1336] = 4294967295; isPrintBitm[1337] = 4294967295; 
isPrintBitm[1338] = 4294967295; isPrintBitm[1339] = 4294967295; isPrintBitm[1340] = 4294967295; isPrintBitm[1341] = 16744447; 
isPrintBitm[1343] = 4286578688; isPrintBitm[1344] = 4294967295; isPrintBitm[1345] = 67047423; isPrintBitm[1346] = 4294967295; 
isPrintBitm[1347] = 16777215; isPrintBitm[1348] = 4294967295; isPrintBitm[1349] = 4294967295; isPrintBitm[1350] = 67092543; 
isPrintBitm[1351] = 1073741823; isPrintBitm[1352] = 4294967295; isPrintBitm[1353] = 4294967295; isPrintBitm[1354] = 2148532223; 
isPrintBitm[1355] = 536870911; isPrintBitm[1356] = 4294967295; isPrintBitm[1357] = 4294967295; isPrintBitm[1358] = 3288317951; 
isPrintBitm[1359] = 2147483647; isPrintBitm[1360] = 4294967295; isPrintBitm[1361] = 8388607; isPrintBitm[1362] = 4093591551; 
isPrintBitm[1363] = 4294967295; isPrintBitm[1364] = 4294967295; isPrintBitm[1365] = 4294967295; isPrintBitm[1366] = 4160749575; 
isPrintBitm[1367] = 8388607; isPrintBitm[1368] = 8289918; isPrintBitm[1369] = 4294934399; isPrintBitm[1370] = 4294967295; 
isPrintBitm[1371] = 4294901823; isPrintBitm[1372] = 4294967295; isPrintBitm[1373] = 4294967295; isPrintBitm[1374] = 4294967295; 
isPrintBitm[1375] = 67059711; isPrintBitm[1376] = 4294967295; isPrintBitm[1377] = 4294967295; isPrintBitm[1378] = 4294967295; 
isPrintBitm[1379] = 4294967295; isPrintBitm[1380] = 4294967295; isPrintBitm[1381] = 4294967295; isPrintBitm[1382] = 4294967295; 
isPrintBitm[1383] = 4294967295; isPrintBitm[1384] = 4294967295; isPrintBitm[1385] = 4294967295; isPrintBitm[1386] = 4294967295; 
isPrintBitm[1387] = 4294967295; isPrintBitm[1388] = 4294967295; isPrintBitm[1389] = 4294967295; isPrintBitm[1390] = 4294967295; 
isPrintBitm[1391] = 4294967295; isPrintBitm[1392] = 4294967295; isPrintBitm[1393] = 4294967295; isPrintBitm[1394] = 4294967295; 
isPrintBitm[1395] = 4294967295; isPrintBitm[1396] = 4294967295; isPrintBitm[1397] = 4294967295; isPrintBitm[1398] = 4294967295; 
isPrintBitm[1399] = 4294967295; isPrintBitm[1400] = 4294967295; isPrintBitm[1401] = 4294967295; isPrintBitm[1402] = 4294967295; 
isPrintBitm[1403] = 4294967295; isPrintBitm[1404] = 4294967295; isPrintBitm[1405] = 4294967295; isPrintBitm[1406] = 4294967295; 
isPrintBitm[1407] = 4294967295; isPrintBitm[1408] = 4294967295; isPrintBitm[1409] = 4294967295; isPrintBitm[1410] = 4294967295; 
isPrintBitm[1411] = 4294967295; isPrintBitm[1412] = 4294967295; isPrintBitm[1413] = 4294967295; isPrintBitm[1414] = 4294967295; 
isPrintBitm[1415] = 4294967295; isPrintBitm[1416] = 4294967295; isPrintBitm[1417] = 4294967295; isPrintBitm[1418] = 4294967295; 
isPrintBitm[1419] = 4294967295; isPrintBitm[1420] = 4294967295; isPrintBitm[1421] = 4294967295; isPrintBitm[1422] = 4294967295; 
isPrintBitm[1423] = 4294967295; isPrintBitm[1424] = 4294967295; isPrintBitm[1425] = 4294967295; isPrintBitm[1426] = 4294967295; 
isPrintBitm[1427] = 4294967295; isPrintBitm[1428] = 4294967295; isPrintBitm[1429] = 4294967295; isPrintBitm[1430] = 4294967295; 
isPrintBitm[1431] = 4294967295; isPrintBitm[1432] = 4294967295; isPrintBitm[1433] = 4294967295; isPrintBitm[1434] = 4294967295; 
isPrintBitm[1435] = 4294967295; isPrintBitm[1436] = 4294967295; isPrintBitm[1437] = 4294967295; isPrintBitm[1438] = 4294967295; 
isPrintBitm[1439] = 4294967295; isPrintBitm[1440] = 4294967295; isPrintBitm[1441] = 4294967295; isPrintBitm[1442] = 4294967295; 
isPrintBitm[1443] = 4294967295; isPrintBitm[1444] = 4294967295; isPrintBitm[1445] = 4294967295; isPrintBitm[1446] = 4294967295; 
isPrintBitm[1447] = 4294967295; isPrintBitm[1448] = 4294967295; isPrintBitm[1449] = 4294967295; isPrintBitm[1450] = 4294967295; 
isPrintBitm[1451] = 4294967295; isPrintBitm[1452] = 4294967295; isPrintBitm[1453] = 4294967295; isPrintBitm[1454] = 4294967295; 
isPrintBitm[1455] = 4294967295; isPrintBitm[1456] = 4294967295; isPrintBitm[1457] = 4294967295; isPrintBitm[1458] = 4294967295; 
isPrintBitm[1459] = 4294967295; isPrintBitm[1460] = 4294967295; isPrintBitm[1461] = 4294967295; isPrintBitm[1462] = 4294967295; 
isPrintBitm[1463] = 4294967295; isPrintBitm[1464] = 4294967295; isPrintBitm[1465] = 4294967295; isPrintBitm[1466] = 4294967295; 
isPrintBitm[1467] = 4294967295; isPrintBitm[1468] = 4294967295; isPrintBitm[1469] = 4294967295; isPrintBitm[1470] = 4294967295; 
isPrintBitm[1471] = 4294967295; isPrintBitm[1472] = 4294967295; isPrintBitm[1473] = 4294967295; isPrintBitm[1474] = 4294967295; 
isPrintBitm[1475] = 4294967295; isPrintBitm[1476] = 4294967295; isPrintBitm[1477] = 4294967295; isPrintBitm[1478] = 4294967295; 
isPrintBitm[1479] = 4294967295; isPrintBitm[1480] = 4294967295; isPrintBitm[1481] = 4294967295; isPrintBitm[1482] = 4294967295; 
isPrintBitm[1483] = 4294967295; isPrintBitm[1484] = 4294967295; isPrintBitm[1485] = 4294967295; isPrintBitm[1486] = 4294967295; 
isPrintBitm[1487] = 4294967295; isPrintBitm[1488] = 4294967295; isPrintBitm[1489] = 4294967295; isPrintBitm[1490] = 4294967295; 
isPrintBitm[1491] = 4294967295; isPrintBitm[1492] = 4294967295; isPrintBitm[1493] = 4294967295; isPrintBitm[1494] = 4294967295; 
isPrintBitm[1495] = 4294967295; isPrintBitm[1496] = 4294967295; isPrintBitm[1497] = 4294967295; isPrintBitm[1498] = 4294967295; 
isPrintBitm[1499] = 4294967295; isPrintBitm[1500] = 4294967295; isPrintBitm[1501] = 4294967295; isPrintBitm[1502] = 4294967295; 
isPrintBitm[1503] = 4294967295; isPrintBitm[1504] = 4294967295; isPrintBitm[1505] = 4294967295; isPrintBitm[1506] = 4294967295; 
isPrintBitm[1507] = 4294967295; isPrintBitm[1508] = 4294967295; isPrintBitm[1509] = 4294967295; isPrintBitm[1510] = 4294967295; 
isPrintBitm[1511] = 4294967295; isPrintBitm[1512] = 4294967295; isPrintBitm[1513] = 4294967295; isPrintBitm[1514] = 4294967295; 
isPrintBitm[1515] = 4294967295; isPrintBitm[1516] = 4294967295; isPrintBitm[1517] = 4294967295; isPrintBitm[1518] = 4294967295; 
isPrintBitm[1519] = 4294967295; isPrintBitm[1520] = 4294967295; isPrintBitm[1521] = 4294967295; isPrintBitm[1522] = 4294967295; 
isPrintBitm[1523] = 4294967295; isPrintBitm[1524] = 4294967295; isPrintBitm[1525] = 4294967295; isPrintBitm[1526] = 4294967295; 
isPrintBitm[1527] = 4294967295; isPrintBitm[1528] = 4294967295; isPrintBitm[1529] = 4294967295; isPrintBitm[1530] = 4294967295; 
isPrintBitm[1531] = 4294967295; isPrintBitm[1532] = 4294967295; isPrintBitm[1533] = 4294967295; isPrintBitm[1534] = 4294967295; 
isPrintBitm[1535] = 4294967295; isPrintBitm[1536] = 4294967295; isPrintBitm[1537] = 4294967295; isPrintBitm[1538] = 4294967295; 
isPrintBitm[1539] = 4294967295; isPrintBitm[1540] = 4294967295; isPrintBitm[1541] = 4294967295; isPrintBitm[1542] = 4294967295; 
isPrintBitm[1543] = 4294967295; isPrintBitm[1544] = 4294967295; isPrintBitm[1545] = 4294967295; isPrintBitm[1546] = 4294967295; 
isPrintBitm[1547] = 4294967295; isPrintBitm[1548] = 4294967295; isPrintBitm[1549] = 4294967295; isPrintBitm[1550] = 4294967295; 
isPrintBitm[1551] = 4294967295; isPrintBitm[1552] = 4294967295; isPrintBitm[1553] = 4294967295; isPrintBitm[1554] = 4294967295; 
isPrintBitm[1555] = 4294967295; isPrintBitm[1556] = 4294967295; isPrintBitm[1557] = 4294967295; isPrintBitm[1558] = 4294967295; 
isPrintBitm[1559] = 4294967295; isPrintBitm[1560] = 4294967295; isPrintBitm[1561] = 4294967295; isPrintBitm[1562] = 4294967295; 
isPrintBitm[1563] = 4294967295; isPrintBitm[1564] = 4294967295; isPrintBitm[1565] = 4294967295; isPrintBitm[1566] = 4294967295; 
isPrintBitm[1567] = 4294967295; isPrintBitm[1568] = 4294967295; isPrintBitm[1569] = 4294967295; isPrintBitm[1570] = 4294967295; 
isPrintBitm[1571] = 4294967295; isPrintBitm[1572] = 4294967295; isPrintBitm[1573] = 4294967295; isPrintBitm[1574] = 4294967295; 
isPrintBitm[1575] = 4294967295; isPrintBitm[1576] = 4294967295; isPrintBitm[1577] = 4294967295; isPrintBitm[1578] = 4294967295; 
isPrintBitm[1579] = 4294967295; isPrintBitm[1580] = 4294967295; isPrintBitm[1581] = 4294967295; isPrintBitm[1582] = 4294967295; 
isPrintBitm[1583] = 4294967295; isPrintBitm[1584] = 4294967295; isPrintBitm[1585] = 4294967295; isPrintBitm[1586] = 4294967295; 
isPrintBitm[1587] = 4294967295; isPrintBitm[1588] = 4294967295; isPrintBitm[1589] = 4294967295; isPrintBitm[1590] = 4294967295; 
isPrintBitm[1591] = 4294967295; isPrintBitm[1592] = 4294967295; isPrintBitm[1593] = 4294967295; isPrintBitm[1594] = 4294967295; 
isPrintBitm[1595] = 4294967295; isPrintBitm[1596] = 4294967295; isPrintBitm[1597] = 4294967295; isPrintBitm[1598] = 4294967295; 
isPrintBitm[1599] = 4294967295; isPrintBitm[1600] = 4294967295; isPrintBitm[1601] = 4294967295; isPrintBitm[1602] = 4294967295; 
isPrintBitm[1603] = 4294967295; isPrintBitm[1604] = 4294967295; isPrintBitm[1605] = 4294967295; isPrintBitm[1606] = 4294967295; 
isPrintBitm[1607] = 4294967295; isPrintBitm[1608] = 4294967295; isPrintBitm[1609] = 4294967295; isPrintBitm[1610] = 4294967295; 
isPrintBitm[1611] = 4294967295; isPrintBitm[1612] = 4294967295; isPrintBitm[1613] = 4294967295; isPrintBitm[1614] = 4294967295; 
isPrintBitm[1615] = 4294967295; isPrintBitm[1616] = 4294967295; isPrintBitm[1617] = 4294967295; isPrintBitm[1618] = 4294967295; 
isPrintBitm[1619] = 4294967295; isPrintBitm[1620] = 4294967295; isPrintBitm[1621] = 4294967295; isPrintBitm[1622] = 4294967295; 
isPrintBitm[1623] = 4294967295; isPrintBitm[1624] = 4294967295; isPrintBitm[1625] = 4294967295; isPrintBitm[1626] = 4294967295; 
isPrintBitm[1627] = 4294967295; isPrintBitm[1628] = 4294967295; isPrintBitm[1629] = 4294967295; isPrintBitm[1630] = 4294967295; 
isPrintBitm[1631] = 4294967295; isPrintBitm[1632] = 4294967295; isPrintBitm[1633] = 4294967295; isPrintBitm[1634] = 4294967295; 
isPrintBitm[1635] = 4294967295; isPrintBitm[1636] = 4294967295; isPrintBitm[1637] = 4294967295; isPrintBitm[1638] = 4294967295; 
isPrintBitm[1639] = 4294967295; isPrintBitm[1640] = 4294967295; isPrintBitm[1641] = 4294967295; isPrintBitm[1642] = 4294967295; 
isPrintBitm[1643] = 4294967295; isPrintBitm[1644] = 4294967295; isPrintBitm[1645] = 4294967295; isPrintBitm[1646] = 4294967295; 
isPrintBitm[1647] = 4294967295; isPrintBitm[1648] = 4294967295; isPrintBitm[1649] = 4294967295; isPrintBitm[1650] = 4294967295; 
isPrintBitm[1651] = 4294967295; isPrintBitm[1652] = 4294967295; isPrintBitm[1653] = 4294967295; isPrintBitm[1654] = 4294967295; 
isPrintBitm[1655] = 4294967295; isPrintBitm[1656] = 4294967295; isPrintBitm[1657] = 4294967295; isPrintBitm[1658] = 4294967295; 
isPrintBitm[1659] = 4294967295; isPrintBitm[1660] = 4294967295; isPrintBitm[1661] = 4294967295; isPrintBitm[1662] = 4294967295; 
isPrintBitm[1663] = 4294967295; isPrintBitm[1664] = 4294967295; isPrintBitm[1665] = 4294967295; isPrintBitm[1666] = 4294967295; 
isPrintBitm[1667] = 4294967295; isPrintBitm[1668] = 4294967295; isPrintBitm[1669] = 4294967295; isPrintBitm[1670] = 4294967295; 
isPrintBitm[1671] = 4294967295; isPrintBitm[1672] = 4294967295; isPrintBitm[1673] = 4294967295; isPrintBitm[1674] = 4294967295; 
isPrintBitm[1675] = 4294967295; isPrintBitm[1676] = 4294967295; isPrintBitm[1677] = 4294967295; isPrintBitm[1678] = 4294967295; 
isPrintBitm[1679] = 4294967295; isPrintBitm[1680] = 4294967295; isPrintBitm[1681] = 4294967295; isPrintBitm[1682] = 4294967295; 
isPrintBitm[1683] = 4294967295; isPrintBitm[1684] = 4294967295; isPrintBitm[1685] = 4294967295; isPrintBitm[1686] = 4294967295; 
isPrintBitm[1687] = 4294967295; isPrintBitm[1688] = 4294967295; isPrintBitm[1689] = 4294967295; isPrintBitm[1690] = 4294967295; 
isPrintBitm[1691] = 4294967295; isPrintBitm[1692] = 4294967295; isPrintBitm[1693] = 4294967295; isPrintBitm[1694] = 4294967295; 
isPrintBitm[1695] = 4294967295; isPrintBitm[1696] = 4294967295; isPrintBitm[1697] = 4294967295; isPrintBitm[1698] = 4294967295; 
isPrintBitm[1699] = 4294967295; isPrintBitm[1700] = 4294967295; isPrintBitm[1701] = 4294967295; isPrintBitm[1702] = 4294967295; 
isPrintBitm[1703] = 4294967295; isPrintBitm[1704] = 4294967295; isPrintBitm[1705] = 4294967295; isPrintBitm[1706] = 4294967295; 
isPrintBitm[1707] = 4294967295; isPrintBitm[1708] = 4294967295; isPrintBitm[1709] = 4294967295; isPrintBitm[1710] = 4294967295; 
isPrintBitm[1711] = 4294967295; isPrintBitm[1712] = 4294967295; isPrintBitm[1713] = 4294967295; isPrintBitm[1714] = 4294967295; 
isPrintBitm[1715] = 4294967295; isPrintBitm[1716] = 4294967295; isPrintBitm[1717] = 4294967295; isPrintBitm[1718] = 4294967295; 
isPrintBitm[1719] = 4294967295; isPrintBitm[1720] = 4294967295; isPrintBitm[1721] = 4294967295; isPrintBitm[1722] = 4294967295; 
isPrintBitm[1723] = 4294967295; isPrintBitm[1724] = 4294967295; isPrintBitm[1725] = 4294901775; isPrintBitm[1726] = 4294965375; 
isPrintBitm[1727] = 268435455; isPrintBitm[1792] = 4294967295; isPrintBitm[1793] = 4294967295; isPrintBitm[1794] = 4294967295; 
isPrintBitm[1795] = 4294967295; isPrintBitm[1796] = 4294967295; isPrintBitm[1797] = 4294967295; isPrintBitm[1798] = 4294967295; 
isPrintBitm[1799] = 4294967295; isPrintBitm[1800] = 4294967295; isPrintBitm[1801] = 4294967295; isPrintBitm[1802] = 4294967295; 
isPrintBitm[1803] = 4294967295; isPrintBitm[1804] = 4294967295; isPrintBitm[1805] = 4294967295; isPrintBitm[1806] = 4294967295; 
isPrintBitm[1807] = 4294967295; isPrintBitm[1808] = 4294967295; isPrintBitm[1809] = 4294967295; isPrintBitm[1810] = 4294967295; 
isPrintBitm[1811] = 4294967295; isPrintBitm[1812] = 4294967295; isPrintBitm[1813] = 4294967295; isPrintBitm[1814] = 4294967295; 
isPrintBitm[1815] = 4294967295; isPrintBitm[1816] = 4294967295; isPrintBitm[1817] = 4294967295; isPrintBitm[1818] = 4294967295; 
isPrintBitm[1819] = 4294967295; isPrintBitm[1820] = 4294967295; isPrintBitm[1821] = 4294967295; isPrintBitm[1822] = 4294967295; 
isPrintBitm[1823] = 4294967295; isPrintBitm[1824] = 4294967295; isPrintBitm[1825] = 4294967295; isPrintBitm[1826] = 4294967295; 
isPrintBitm[1827] = 4294967295; isPrintBitm[1828] = 4294967295; isPrintBitm[1829] = 4294967295; isPrintBitm[1830] = 4294967295; 
isPrintBitm[1831] = 4294967295; isPrintBitm[1832] = 4294967295; isPrintBitm[1833] = 4294967295; isPrintBitm[1834] = 4294967295; 
isPrintBitm[1835] = 4294967295; isPrintBitm[1836] = 4294967295; isPrintBitm[1837] = 4294967295; isPrintBitm[1838] = 4294967295; 
isPrintBitm[1839] = 4294967295; isPrintBitm[1840] = 4294967295; isPrintBitm[1841] = 4294967295; isPrintBitm[1842] = 4294967295; 
isPrintBitm[1843] = 4294967295; isPrintBitm[1844] = 4294967295; isPrintBitm[1845] = 4294967295; isPrintBitm[1846] = 4294967295; 
isPrintBitm[1847] = 4294967295; isPrintBitm[1848] = 4294967295; isPrintBitm[1849] = 4294967295; isPrintBitm[1850] = 4294967295; 
isPrintBitm[1851] = 4294967295; isPrintBitm[1852] = 4294967295; isPrintBitm[1853] = 4294967295; isPrintBitm[1854] = 4294967295; 
isPrintBitm[1855] = 4294967295; isPrintBitm[1856] = 4294967295; isPrintBitm[1857] = 4294967295; isPrintBitm[1858] = 4294967295; 
isPrintBitm[1859] = 4294967295; isPrintBitm[1860] = 4294967295; isPrintBitm[1861] = 4294967295; isPrintBitm[1862] = 4294967295; 
isPrintBitm[1863] = 4294967295; isPrintBitm[1864] = 4294967295; isPrintBitm[1865] = 4294967295; isPrintBitm[1866] = 4294967295; 
isPrintBitm[1867] = 4294967295; isPrintBitm[1868] = 4294967295; isPrintBitm[1869] = 4294967295; isPrintBitm[1870] = 4294967295; 
isPrintBitm[1871] = 4294967295; isPrintBitm[1872] = 4294967295; isPrintBitm[1873] = 4294967295; isPrintBitm[1874] = 4294967295; 
isPrintBitm[1875] = 4294967295; isPrintBitm[1876] = 4294967295; isPrintBitm[1877] = 4294967295; isPrintBitm[1878] = 4294967295; 
isPrintBitm[1879] = 4294967295; isPrintBitm[1880] = 4294967295; isPrintBitm[1881] = 4294967295; isPrintBitm[1882] = 4294967295; 
isPrintBitm[1883] = 4294967295; isPrintBitm[1884] = 4294967295; isPrintBitm[1885] = 4294967295; isPrintBitm[1886] = 4294967295; 
isPrintBitm[1887] = 4294967295; isPrintBitm[1888] = 4294967295; isPrintBitm[1889] = 4294967295; isPrintBitm[1890] = 4294967295; 
isPrintBitm[1891] = 4294967295; isPrintBitm[1892] = 4294967295; isPrintBitm[1893] = 4294967295; isPrintBitm[1894] = 4294967295; 
isPrintBitm[1895] = 4294967295; isPrintBitm[1896] = 4294967295; isPrintBitm[1897] = 4294967295; isPrintBitm[1898] = 4294967295; 
isPrintBitm[1899] = 4294967295; isPrintBitm[1900] = 4294967295; isPrintBitm[1901] = 4294967295; isPrintBitm[1902] = 4294967295; 
isPrintBitm[1903] = 4294967295; isPrintBitm[1904] = 4294967295; isPrintBitm[1905] = 4294967295; isPrintBitm[1906] = 4294967295; 
isPrintBitm[1907] = 4294967295; isPrintBitm[1908] = 4294967295; isPrintBitm[1909] = 4294967295; isPrintBitm[1910] = 4294967295; 
isPrintBitm[1911] = 4294967295; isPrintBitm[1912] = 4294967295; isPrintBitm[1913] = 4294967295; isPrintBitm[1914] = 4294967295; 
isPrintBitm[1915] = 4294967295; isPrintBitm[1916] = 4294967295; isPrintBitm[1917] = 4294967295; isPrintBitm[1918] = 4294967295; 
isPrintBitm[1919] = 4294967295; isPrintBitm[1920] = 4294967295; isPrintBitm[1921] = 4294967295; isPrintBitm[1922] = 4294967295; 
isPrintBitm[1923] = 4294967295; isPrintBitm[1924] = 4294967295; isPrintBitm[1925] = 4294967295; isPrintBitm[1926] = 4294967295; 
isPrintBitm[1927] = 4294967295; isPrintBitm[1928] = 4294967295; isPrintBitm[1929] = 4294967295; isPrintBitm[1930] = 4294967295; 
isPrintBitm[1931] = 4294967295; isPrintBitm[1932] = 4294967295; isPrintBitm[1933] = 4294967295; isPrintBitm[1934] = 4294967295; 
isPrintBitm[1935] = 4294967295; isPrintBitm[1936] = 4294967295; isPrintBitm[1937] = 4294967295; isPrintBitm[1938] = 4294967295; 
isPrintBitm[1939] = 4294967295; isPrintBitm[1940] = 4294967295; isPrintBitm[1941] = 4294967295; isPrintBitm[1942] = 4294967295; 
isPrintBitm[1943] = 4294967295; isPrintBitm[1944] = 4294967295; isPrintBitm[1945] = 4294967295; isPrintBitm[1946] = 4294967295; 
isPrintBitm[1947] = 4294967295; isPrintBitm[1948] = 4294967295; isPrintBitm[1949] = 4294967295; isPrintBitm[1950] = 4294967295; 
isPrintBitm[1951] = 4294967295; isPrintBitm[1952] = 4294967295; isPrintBitm[1953] = 4294967295; isPrintBitm[1954] = 4294967295; 
isPrintBitm[1955] = 4294967295; isPrintBitm[1956] = 4294967295; isPrintBitm[1957] = 4294967295; isPrintBitm[1958] = 4294967295; 
isPrintBitm[1959] = 4294967295; isPrintBitm[1960] = 4294967295; isPrintBitm[1961] = 4294967295; isPrintBitm[1962] = 4294967295; 
isPrintBitm[1963] = 4294967295; isPrintBitm[1964] = 4294967295; isPrintBitm[1965] = 4294967295; isPrintBitm[1966] = 4294967295; 
isPrintBitm[1967] = 4294967295; isPrintBitm[1968] = 4294967295; isPrintBitm[1969] = 4294967295; isPrintBitm[1970] = 4294967295; 
isPrintBitm[1971] = 4294967295; isPrintBitm[1972] = 4294967295; isPrintBitm[1973] = 4294967295; isPrintBitm[1974] = 4294967295; 
isPrintBitm[1975] = 4294967295; isPrintBitm[1976] = 4294967295; isPrintBitm[1977] = 4294967295; isPrintBitm[1978] = 4294967295; 
isPrintBitm[1979] = 4294967295; isPrintBitm[1980] = 4294967295; isPrintBitm[1981] = 4294967295; isPrintBitm[1982] = 4294967295; 
isPrintBitm[1983] = 4294967295; isPrintBitm[1984] = 4294967295; isPrintBitm[1985] = 4294967295; isPrintBitm[1986] = 4294967295; 
isPrintBitm[1987] = 4294967295; isPrintBitm[1988] = 4294967295; isPrintBitm[1989] = 4294967295; isPrintBitm[1990] = 4294967295; 
isPrintBitm[1991] = 4294967295; isPrintBitm[1992] = 4294967295; isPrintBitm[1993] = 4294967295; isPrintBitm[1994] = 4294967295; 
isPrintBitm[1995] = 4294967295; isPrintBitm[1996] = 4294967295; isPrintBitm[1997] = 4294967295; isPrintBitm[1998] = 4294967295; 
isPrintBitm[1999] = 4294967295; isPrintBitm[2000] = 4294967295; isPrintBitm[2001] = 4294967295; isPrintBitm[2002] = 4294967295; 
isPrintBitm[2003] = 4294918143; isPrintBitm[2004] = 4294967295; isPrintBitm[2005] = 4294967295; isPrintBitm[2006] = 67108863; 
isPrintBitm[2008] = 3774349439; isPrintBitm[2009] = 1602224127; isPrintBitm[2010] = 4294967259; isPrintBitm[2011] = 4294967295; 
isPrintBitm[2012] = 4294967295; isPrintBitm[2013] = 4294967295; isPrintBitm[2014] = 4294443011; isPrintBitm[2015] = 4294967295; 
isPrintBitm[2016] = 4294967295; isPrintBitm[2017] = 4294967295; isPrintBitm[2018] = 4294967295; isPrintBitm[2019] = 4294967295; 
isPrintBitm[2020] = 4294967295; isPrintBitm[2021] = 4294967295; isPrintBitm[2022] = 4294967295; isPrintBitm[2023] = 4294967295; 
isPrintBitm[2024] = 4294967295; isPrintBitm[2025] = 4294967295; isPrintBitm[2026] = 4294901760; isPrintBitm[2027] = 4294967295; 
isPrintBitm[2028] = 4294770687; isPrintBitm[2029] = 4294967295; isPrintBitm[2030] = 255; isPrintBitm[2031] = 1073676288; 
isPrintBitm[2032] = 67108863; isPrintBitm[2033] = 4294967295; isPrintBitm[2034] = 4294443007; isPrintBitm[2035] = 4292808575; 
isPrintBitm[2036] = 4294967295; isPrintBitm[2037] = 4294967295; isPrintBitm[2038] = 4294967295; isPrintBitm[2039] = 2684354559; 
isPrintBitm[2040] = 4294967294; isPrintBitm[2041] = 4294967295; isPrintBitm[2042] = 4294967295; isPrintBitm[2043] = 4294967295; 
isPrintBitm[2044] = 4294967295; isPrintBitm[2045] = 2147483647; isPrintBitm[2046] = 486341884; isPrintBitm[2047] = 1040220031; 
isPrintBitm[2048] = 4294963199; isPrintBitm[2049] = 3087007615; isPrintBitm[2050] = 1073692671; isPrintBitm[2052] = 4294967295; 
isPrintBitm[2053] = 4294967295; isPrintBitm[2054] = 4294967295; isPrintBitm[2055] = 134217727; isPrintBitm[2056] = 4294967175; 
isPrintBitm[2057] = 4287627263; isPrintBitm[2058] = 4294967295; isPrintBitm[2059] = 4294967295; isPrintBitm[2060] = 268402687; 
isPrintBitm[2061] = 1; isPrintBitm[2062] = 4294901760; isPrintBitm[2063] = 1073741823; isPrintBitm[2068] = 536870911; 
isPrintBitm[2069] = 4294967295; isPrintBitm[2070] = 131071; isPrintBitm[2071] = 268435455; isPrintBitm[2072] = 4294967295; 
isPrintBitm[2073] = 4294959119; isPrintBitm[2074] = 4294903807; isPrintBitm[2075] = 134217727; isPrintBitm[2076] = 3221225471; 
isPrintBitm[2077] = 4294967295; isPrintBitm[2078] = 4194063; isPrintBitm[2080] = 4294967295; isPrintBitm[2081] = 4294967295; 
isPrintBitm[2082] = 4294967295; isPrintBitm[2083] = 4294967295; isPrintBitm[2084] = 1073741823; isPrintBitm[2085] = 4294902783; 
isPrintBitm[2086] = 4279238655; isPrintBitm[2087] = 268435455; isPrintBitm[2088] = 4294967295; isPrintBitm[2089] = 4294902015; 
isPrintBitm[2090] = 4294967295; isPrintBitm[2091] = 32783; isPrintBitm[2096] = 4294967295; isPrintBitm[2097] = 4294967295; 
isPrintBitm[2098] = 4294967295; isPrintBitm[2099] = 4294967295; isPrintBitm[2100] = 4294967295; isPrintBitm[2101] = 4294967295; 
isPrintBitm[2102] = 4294967295; isPrintBitm[2103] = 4294967295; isPrintBitm[2104] = 4294967295; isPrintBitm[2105] = 8388607; 
isPrintBitm[2106] = 4194303; isPrintBitm[2107] = 255; isPrintBitm[2112] = 4294966591; isPrintBitm[2113] = 2445279231; 
isPrintBitm[2114] = 4290772991; isPrintBitm[2115] = 4294967295; isPrintBitm[2116] = 2147483647; isPrintBitm[2117] = 65408; 
isPrintBitm[2119] = 4164419583; isPrintBitm[2120] = 2415919103; isPrintBitm[2121] = 2214592511; isPrintBitm[2124] = 4294967295; 
isPrintBitm[2125] = 4043309055; isPrintBitm[2126] = 4294770687; isPrintBitm[2127] = 4294967295; isPrintBitm[2128] = 4277137519; 
isPrintBitm[2129] = 2265972735; isPrintBitm[2130] = 33489151; isPrintBitm[2131] = 4294967295; isPrintBitm[2132] = 4294967295; 
isPrintBitm[2134] = 4294967295; isPrintBitm[2135] = 8386687; isPrintBitm[2136] = 4294967295; isPrintBitm[2137] = 4265607167; 
isPrintBitm[2138] = 4282384383; isPrintBitm[2139] = 4278714367; isPrintBitm[2140] = 503578623; isPrintBitm[2141] = 65024; 
isPrintBitm[2144] = 4294967295; isPrintBitm[2145] = 4294967295; isPrintBitm[2146] = 511; isPrintBitm[2148] = 4294967295; 
isPrintBitm[2149] = 524287; isPrintBitm[2150] = 4294967295; isPrintBitm[2151] = 4228382719; isPrintBitm[2163] = 2147483647; 
isPrintBitm[2176] = 4294967295; isPrintBitm[2177] = 4294967295; isPrintBitm[2178] = 4294721535; isPrintBitm[2179] = 2147549183; 
isPrintBitm[2180] = 4294967295; isPrintBitm[2181] = 4294967295; isPrintBitm[2182] = 4294901763; isPrintBitm[2183] = 67043839; 
isPrintBitm[2184] = 4294967295; isPrintBitm[2185] = 4292870143; isPrintBitm[2186] = 4294901775; isPrintBitm[2187] = 8388607; 
isPrintBitm[2188] = 4294967295; isPrintBitm[2189] = 4294967295; isPrintBitm[2190] = 4294918143; isPrintBitm[2191] = 2097150; 
isPrintBitm[2192] = 4294705151; isPrintBitm[2193] = 2147483647; isPrintBitm[2196] = 3221208447; isPrintBitm[2197] = 4294902783; 
isPrintBitm[2198] = 4294967295; isPrintBitm[2199] = 67045375; isPrintBitm[2200] = 4294549487; isPrintBitm[2201] = 4092460543; 
isPrintBitm[2202] = 3766565279; isPrintBitm[2203] = 2039759; isPrintBitm[2208] = 4294967295; isPrintBitm[2209] = 4294967295; 
isPrintBitm[2210] = 738197503; isPrintBitm[2212] = 4294967295; isPrintBitm[2213] = 4294967295; isPrintBitm[2214] = 67043583; 
isPrintBitm[2220] = 4294967295; isPrintBitm[2221] = 4282384383; isPrintBitm[2222] = 1073741823; isPrintBitm[2224] = 4294967295; 
isPrintBitm[2225] = 4294967295; isPrintBitm[2226] = 67043359; isPrintBitm[2227] = 8191; isPrintBitm[2228] = 4294967295; 
isPrintBitm[2229] = 16777215; isPrintBitm[2230] = 1023; isPrintBitm[2232] = 3825205247; isPrintBitm[2233] = 4294905855; 
isPrintBitm[2245] = 4294967295; isPrintBitm[2246] = 4294967295; isPrintBitm[2247] = 2148007935; isPrintBitm[2256] = 4294967295; 
isPrintBitm[2257] = 4294967295; isPrintBitm[2258] = 4294902015; isPrintBitm[2259] = 4294967295; isPrintBitm[2260] = 3758096335; 
isPrintBitm[2261] = 7; isPrintBitm[2262] = 4294967295; isPrintBitm[2263] = 33554431; isPrintBitm[2272] = 4294966783; 
isPrintBitm[2273] = 4286578687; isPrintBitm[2274] = 4294901823; isPrintBitm[2275] = 4294909951; isPrintBitm[2276] = 4294770687; 
isPrintBitm[2277] = 8388351; isPrintBitm[2280] = 4294966143; isPrintBitm[2281] = 3028287487; isPrintBitm[2282] = 67043583; 
isPrintBitm[2304] = 4294967295; isPrintBitm[2305] = 4294967295; isPrintBitm[2306] = 4294967295; isPrintBitm[2307] = 4294967295; 
isPrintBitm[2308] = 4294967295; isPrintBitm[2309] = 4294967295; isPrintBitm[2310] = 4294967295; isPrintBitm[2311] = 4294967295; 
isPrintBitm[2312] = 4294967295; isPrintBitm[2313] = 4294967295; isPrintBitm[2314] = 4294967295; isPrintBitm[2315] = 4294967295; 
isPrintBitm[2316] = 4294967295; isPrintBitm[2317] = 4294967295; isPrintBitm[2318] = 4294967295; isPrintBitm[2319] = 4294967295; 
isPrintBitm[2320] = 4294967295; isPrintBitm[2321] = 4294967295; isPrintBitm[2322] = 4294967295; isPrintBitm[2323] = 4294967295; 
isPrintBitm[2324] = 4294967295; isPrintBitm[2325] = 4294967295; isPrintBitm[2326] = 4294967295; isPrintBitm[2327] = 4294967295; 
isPrintBitm[2328] = 4294967295; isPrintBitm[2329] = 4294967295; isPrintBitm[2330] = 4294967295; isPrintBitm[2331] = 4294967295; 
isPrintBitm[2332] = 67108863; isPrintBitm[2336] = 4294967295; isPrintBitm[2337] = 4294967295; isPrintBitm[2338] = 4294967295; 
isPrintBitm[2339] = 2064383; isPrintBitm[2340] = 4294967295; isPrintBitm[2341] = 4294967295; isPrintBitm[2342] = 4294967295; 
isPrintBitm[2343] = 4294967295; isPrintBitm[2344] = 4294967295; isPrintBitm[2345] = 4294967295; isPrintBitm[2346] = 15; 
isPrintBitm[2432] = 4294967295; isPrintBitm[2433] = 4294967295; isPrintBitm[2434] = 4294967295; isPrintBitm[2435] = 4294967295; 
isPrintBitm[2436] = 4294967295; isPrintBitm[2437] = 4294967295; isPrintBitm[2438] = 4294967295; isPrintBitm[2439] = 4294967295; 
isPrintBitm[2440] = 4294967295; isPrintBitm[2441] = 4294967295; isPrintBitm[2442] = 4294967295; isPrintBitm[2443] = 4294967295; 
isPrintBitm[2444] = 4294967295; isPrintBitm[2445] = 4294967295; isPrintBitm[2446] = 4294967295; isPrintBitm[2447] = 4294967295; 
isPrintBitm[2448] = 4294967295; isPrintBitm[2449] = 4294967295; isPrintBitm[2450] = 4294967295; isPrintBitm[2451] = 4294967295; 
isPrintBitm[2452] = 4294967295; isPrintBitm[2453] = 4294967295; isPrintBitm[2454] = 4294967295; isPrintBitm[2455] = 4294967295; 
isPrintBitm[2456] = 4294967295; isPrintBitm[2457] = 4294967295; isPrintBitm[2458] = 4294967295; isPrintBitm[2459] = 4294967295; 
isPrintBitm[2460] = 4294967295; isPrintBitm[2461] = 4294967295; isPrintBitm[2462] = 4294967295; isPrintBitm[2463] = 4294967295; 
isPrintBitm[2464] = 4294967295; isPrintBitm[2465] = 32767; isPrintBitm[2592] = 4294967295; isPrintBitm[2593] = 4294967295; 
isPrintBitm[2594] = 4294967295; isPrintBitm[2595] = 4294967295; isPrintBitm[2596] = 4294967295; isPrintBitm[2597] = 4294967295; 
isPrintBitm[2598] = 4294967295; isPrintBitm[2599] = 4294967295; isPrintBitm[2600] = 4294967295; isPrintBitm[2601] = 4294967295; 
isPrintBitm[2602] = 4294967295; isPrintBitm[2603] = 4294967295; isPrintBitm[2604] = 4294967295; isPrintBitm[2605] = 4294967295; 
isPrintBitm[2606] = 4294967295; isPrintBitm[2607] = 4294967295; isPrintBitm[2608] = 4294967295; isPrintBitm[2609] = 4294967295; 
isPrintBitm[2610] = 127; isPrintBitm[2880] = 4294967295; isPrintBitm[2881] = 4294967295; isPrintBitm[2882] = 4294967295; 
isPrintBitm[2883] = 4294967295; isPrintBitm[2884] = 4294967295; isPrintBitm[2885] = 4294967295; isPrintBitm[2886] = 4294967295; 
isPrintBitm[2887] = 4294967295; isPrintBitm[2888] = 4294967295; isPrintBitm[2889] = 4294967295; isPrintBitm[2890] = 4294967295; 
isPrintBitm[2891] = 4294967295; isPrintBitm[2892] = 4294967295; isPrintBitm[2893] = 4294967295; isPrintBitm[2894] = 4294967295; 
isPrintBitm[2895] = 4294967295; isPrintBitm[2896] = 4294967295; isPrintBitm[2897] = 33554431; isPrintBitm[2898] = 2147483647; 
isPrintBitm[2899] = 50175; isPrintBitm[2902] = 4294901760; isPrintBitm[2903] = 4145151; isPrintBitm[2904] = 4294967295; 
isPrintBitm[2905] = 4294967295; isPrintBitm[2906] = 4227792959; isPrintBitm[2907] = 3774873595; isPrintBitm[2908] = 65535; 
isPrintBitm[2936] = 4294967295; isPrintBitm[2937] = 4294967295; isPrintBitm[2938] = 4294901791; isPrintBitm[2939] = 2147483647; 
isPrintBitm[2940] = 4294934528; isPrintBitm[2943] = 3; isPrintBitm[2944] = 4294967295; isPrintBitm[2945] = 4294967295; 
isPrintBitm[2946] = 4294967295; isPrintBitm[2947] = 4294967295; isPrintBitm[2948] = 4294967295; isPrintBitm[2949] = 4294967295; 
isPrintBitm[2950] = 4294967295; isPrintBitm[2951] = 4294967295; isPrintBitm[2952] = 4294967295; isPrintBitm[2953] = 4294967295; 
isPrintBitm[2954] = 4294967295; isPrintBitm[2955] = 4294967295; isPrintBitm[2956] = 4294967295; isPrintBitm[2957] = 4294967295; 
isPrintBitm[2958] = 4294967295; isPrintBitm[2959] = 4294967295; isPrintBitm[2960] = 4294967295; isPrintBitm[2961] = 4294967295; 
isPrintBitm[2962] = 4294967295; isPrintBitm[2963] = 4294967295; isPrintBitm[2964] = 4294967295; isPrintBitm[2965] = 4294967295; 
isPrintBitm[2966] = 4294967295; isPrintBitm[2967] = 4294967295; isPrintBitm[2968] = 4294967295; isPrintBitm[2969] = 4294967295; 
isPrintBitm[2970] = 4294967295; isPrintBitm[2971] = 4294967295; isPrintBitm[2972] = 4294967295; isPrintBitm[2973] = 4294967295; 
isPrintBitm[2974] = 4294967295; isPrintBitm[2975] = 4294967295; isPrintBitm[2976] = 4294967295; isPrintBitm[2977] = 4294967295; 
isPrintBitm[2978] = 4294967295; isPrintBitm[2979] = 4294967295; isPrintBitm[2980] = 4294967295; isPrintBitm[2981] = 4294967295; 
isPrintBitm[2982] = 4294967295; isPrintBitm[2983] = 4294967295; isPrintBitm[2984] = 4294967295; isPrintBitm[2985] = 4294967295; 
isPrintBitm[2986] = 4294967295; isPrintBitm[2987] = 4294967295; isPrintBitm[2988] = 4294967295; isPrintBitm[2989] = 4294967295; 
isPrintBitm[2990] = 4294967295; isPrintBitm[2991] = 4294967295; isPrintBitm[2992] = 4294967295; isPrintBitm[2993] = 4294967295; 
isPrintBitm[2994] = 4294967295; isPrintBitm[2995] = 4294967295; isPrintBitm[2996] = 4294967295; isPrintBitm[2997] = 4294967295; 
isPrintBitm[2998] = 4294967295; isPrintBitm[2999] = 4294967295; isPrintBitm[3000] = 4294967295; isPrintBitm[3001] = 4294967295; 
isPrintBitm[3002] = 4294967295; isPrintBitm[3003] = 4294967295; isPrintBitm[3004] = 4294967295; isPrintBitm[3005] = 4294967295; 
isPrintBitm[3006] = 4294967295; isPrintBitm[3007] = 4294967295; isPrintBitm[3008] = 4294967295; isPrintBitm[3009] = 4294967295; 
isPrintBitm[3010] = 4294967295; isPrintBitm[3011] = 4294967295; isPrintBitm[3012] = 4294967295; isPrintBitm[3013] = 4294967295; 
isPrintBitm[3014] = 4294967295; isPrintBitm[3015] = 4294967295; isPrintBitm[3016] = 4294967295; isPrintBitm[3017] = 4294967295; 
isPrintBitm[3018] = 4294967295; isPrintBitm[3019] = 4294967295; isPrintBitm[3020] = 4294967295; isPrintBitm[3021] = 4294967295; 
isPrintBitm[3022] = 4294967295; isPrintBitm[3023] = 4294967295; isPrintBitm[3024] = 4294967295; isPrintBitm[3025] = 4294967295; 
isPrintBitm[3026] = 4294967295; isPrintBitm[3027] = 4294967295; isPrintBitm[3028] = 4294967295; isPrintBitm[3029] = 4294967295; 
isPrintBitm[3030] = 4294967295; isPrintBitm[3031] = 4294967295; isPrintBitm[3032] = 4294967295; isPrintBitm[3033] = 4294967295; 
isPrintBitm[3034] = 4294967295; isPrintBitm[3035] = 4294967295; isPrintBitm[3036] = 4294967295; isPrintBitm[3037] = 4294967295; 
isPrintBitm[3038] = 4294967295; isPrintBitm[3039] = 4294967295; isPrintBitm[3040] = 4294967295; isPrintBitm[3041] = 4294967295; 
isPrintBitm[3042] = 4294967295; isPrintBitm[3043] = 4294967295; isPrintBitm[3044] = 4294967295; isPrintBitm[3045] = 4294967295; 
isPrintBitm[3046] = 4294967295; isPrintBitm[3047] = 4294967295; isPrintBitm[3048] = 4294967295; isPrintBitm[3049] = 4294967295; 
isPrintBitm[3050] = 4294967295; isPrintBitm[3051] = 4294967295; isPrintBitm[3052] = 4294967295; isPrintBitm[3053] = 4294967295; 
isPrintBitm[3054] = 4294967295; isPrintBitm[3055] = 4294967295; isPrintBitm[3056] = 4294967295; isPrintBitm[3057] = 4294967295; 
isPrintBitm[3058] = 4294967295; isPrintBitm[3059] = 4294967295; isPrintBitm[3060] = 4294967295; isPrintBitm[3061] = 4294967295; 
isPrintBitm[3062] = 4294967295; isPrintBitm[3063] = 4294967295; isPrintBitm[3064] = 4294967295; isPrintBitm[3065] = 4294967295; 
isPrintBitm[3066] = 4294967295; isPrintBitm[3067] = 4294967295; isPrintBitm[3068] = 4294967295; isPrintBitm[3069] = 4294967295; 
isPrintBitm[3070] = 4294967295; isPrintBitm[3071] = 4294967295; isPrintBitm[3072] = 4294967295; isPrintBitm[3073] = 4294967295; 
isPrintBitm[3074] = 4294967295; isPrintBitm[3075] = 4294967295; isPrintBitm[3076] = 4294967295; isPrintBitm[3077] = 4294967295; 
isPrintBitm[3078] = 4294967295; isPrintBitm[3079] = 4294967295; isPrintBitm[3080] = 4294967295; isPrintBitm[3081] = 4294967295; 
isPrintBitm[3082] = 4294967295; isPrintBitm[3083] = 4294967295; isPrintBitm[3084] = 4294967295; isPrintBitm[3085] = 4294967295; 
isPrintBitm[3086] = 4294967295; isPrintBitm[3087] = 4294967295; isPrintBitm[3088] = 4294967295; isPrintBitm[3089] = 4294967295; 
isPrintBitm[3090] = 4294967295; isPrintBitm[3091] = 4294967295; isPrintBitm[3092] = 4294967295; isPrintBitm[3093] = 4294967295; 
isPrintBitm[3094] = 4294967295; isPrintBitm[3095] = 4294967295; isPrintBitm[3096] = 4294967295; isPrintBitm[3097] = 4294967295; 
isPrintBitm[3098] = 4294967295; isPrintBitm[3099] = 4294967295; isPrintBitm[3100] = 4294967295; isPrintBitm[3101] = 4294967295; 
isPrintBitm[3102] = 4294967295; isPrintBitm[3103] = 4294967295; isPrintBitm[3104] = 4294967295; isPrintBitm[3105] = 4294967295; 
isPrintBitm[3106] = 4294967295; isPrintBitm[3107] = 4294967295; isPrintBitm[3108] = 4294967295; isPrintBitm[3109] = 4294967295; 
isPrintBitm[3110] = 4294967295; isPrintBitm[3111] = 4294967295; isPrintBitm[3112] = 4294967295; isPrintBitm[3113] = 4294967295; 
isPrintBitm[3114] = 4294967295; isPrintBitm[3115] = 4294967295; isPrintBitm[3116] = 4294967295; isPrintBitm[3117] = 4294967295; 
isPrintBitm[3118] = 4294967295; isPrintBitm[3119] = 4294967295; isPrintBitm[3120] = 4294967295; isPrintBitm[3121] = 4294967295; 
isPrintBitm[3122] = 4294967295; isPrintBitm[3123] = 4294967295; isPrintBitm[3124] = 4294967295; isPrintBitm[3125] = 4294967295; 
isPrintBitm[3126] = 4294967295; isPrintBitm[3127] = 4294967295; isPrintBitm[3128] = 4294967295; isPrintBitm[3129] = 4294967295; 
isPrintBitm[3130] = 4294967295; isPrintBitm[3131] = 4294967295; isPrintBitm[3132] = 4294967295; isPrintBitm[3133] = 4294967295; 
isPrintBitm[3134] = 4294967295; isPrintBitm[3135] = 8191; isPrintBitm[3136] = 4294967295; isPrintBitm[3137] = 4294967295; 
isPrintBitm[3138] = 4294967295; isPrintBitm[3139] = 4294967295; isPrintBitm[3140] = 4294967295; isPrintBitm[3141] = 4294967295; 
isPrintBitm[3142] = 4294967295; isPrintBitm[3143] = 4294967295; isPrintBitm[3144] = 4294967295; isPrintBitm[3145] = 4294967295; 
isPrintBitm[3146] = 4294967295; isPrintBitm[3147] = 4294967295; isPrintBitm[3148] = 4294967295; isPrintBitm[3149] = 4294967295; 
isPrintBitm[3150] = 4294967295; isPrintBitm[3151] = 4294967295; isPrintBitm[3152] = 4294967295; isPrintBitm[3153] = 4294967295; 
isPrintBitm[3154] = 4294967295; isPrintBitm[3155] = 4294967295; isPrintBitm[3156] = 4294967295; isPrintBitm[3157] = 4294967295; 
isPrintBitm[3158] = 4294967295; isPrintBitm[3159] = 524287; isPrintBitm[3456] = 4294967295; isPrintBitm[3457] = 4294967295; 
isPrintBitm[3458] = 4294967295; isPrintBitm[3459] = 4294967295; isPrintBitm[3460] = 4294967295; isPrintBitm[3461] = 4294967295; 
isPrintBitm[3462] = 4294967295; isPrintBitm[3463] = 4294967295; isPrintBitm[3464] = 2147483647; isPrintBitm[3467] = 4294901760; 
isPrintBitm[3468] = 4294967295; isPrintBitm[3469] = 4294967295; isPrintBitm[3470] = 4294967295; isPrintBitm[3471] = 4294967295; 
isPrintBitm[3472] = 4294967295; isPrintBitm[3473] = 4294967295; isPrintBitm[3474] = 4294967295; isPrintBitm[3475] = 4294967295; 
isPrintBitm[3476] = 4294967295; isPrintBitm[3477] = 4294967295; isPrintBitm[3478] = 4294967295; isPrintBitm[3479] = 268435455; 
isPrintBitm[3552] = 4294967295; isPrintBitm[3553] = 4294967295; isPrintBitm[3554] = 4294967295; isPrintBitm[3555] = 536807423; 
isPrintBitm[3556] = 4093575679; isPrintBitm[3557] = 15; isPrintBitm[3712] = 4294967295; isPrintBitm[3713] = 4294967295; 
isPrintBitm[3714] = 4294967295; isPrintBitm[3715] = 4294967295; isPrintBitm[3716] = 4294967295; isPrintBitm[3717] = 4294967295; 
isPrintBitm[3718] = 4294967295; isPrintBitm[3719] = 4194303; isPrintBitm[3720] = 4294967295; isPrintBitm[3721] = 4294966911; 
isPrintBitm[3722] = 4294967295; isPrintBitm[3723] = 4294967295; isPrintBitm[3724] = 4294967295; isPrintBitm[3725] = 4294967295; 
isPrintBitm[3726] = 4294967295; isPrintBitm[3727] = 511; isPrintBitm[3728] = 4294967295; isPrintBitm[3729] = 4294967295; 
isPrintBitm[3730] = 63; isPrintBitm[3736] = 4294967295; isPrintBitm[3737] = 4294967295; isPrintBitm[3738] = 8388607; 
isPrintBitm[3739] = 262143; isPrintBitm[3744] = 4294967295; isPrintBitm[3745] = 4294967295; isPrintBitm[3746] = 4292870143; 
isPrintBitm[3747] = 4294967295; isPrintBitm[3748] = 3758096383; isPrintBitm[3749] = 3959414372; isPrintBitm[3750] = 4294967279; 
isPrintBitm[3751] = 4294967295; isPrintBitm[3752] = 3755993023; isPrintBitm[3753] = 2080374783; isPrintBitm[3754] = 4294835295; 
isPrintBitm[3755] = 4294967295; isPrintBitm[3756] = 4294967295; isPrintBitm[3757] = 4294967295; isPrintBitm[3758] = 4294967295; 
isPrintBitm[3759] = 4294967295; isPrintBitm[3760] = 4294967295; isPrintBitm[3761] = 4294967295; isPrintBitm[3762] = 4294967295; 
isPrintBitm[3763] = 4294967295; isPrintBitm[3764] = 4294967295; isPrintBitm[3765] = 4294967103; isPrintBitm[3766] = 4294967295; 
isPrintBitm[3767] = 4294967295; isPrintBitm[3768] = 4294967295; isPrintBitm[3769] = 4294967295; isPrintBitm[3770] = 4294967295; 
isPrintBitm[3771] = 4294967295; isPrintBitm[3772] = 4294967295; isPrintBitm[3773] = 4294967295; isPrintBitm[3774] = 4294955007; 
isPrintBitm[3775] = 4294967295; isPrintBitm[3776] = 4294967295; isPrintBitm[3777] = 4294967295; isPrintBitm[3778] = 4294967295; 
isPrintBitm[3779] = 4294967295; isPrintBitm[3780] = 4294967295; isPrintBitm[3781] = 4294967295; isPrintBitm[3782] = 4294967295; 
isPrintBitm[3783] = 4294967295; isPrintBitm[3784] = 4294967295; isPrintBitm[3785] = 4294967295; isPrintBitm[3786] = 4294967295; 
isPrintBitm[3787] = 4294967295; isPrintBitm[3788] = 4294967295; isPrintBitm[3789] = 4294967295; isPrintBitm[3790] = 4294967295; 
isPrintBitm[3791] = 4294967295; isPrintBitm[3792] = 4294967295; isPrintBitm[3793] = 4294967295; isPrintBitm[3794] = 4294967295; 
isPrintBitm[3795] = 4294967295; isPrintBitm[3796] = 4160753663; isPrintBitm[3797] = 65534; isPrintBitm[3840] = 4194303871; 
isPrintBitm[3841] = 2011; isPrintBitm[3904] = 4294967295; isPrintBitm[3905] = 4294967295; isPrintBitm[3906] = 4294967295; 
isPrintBitm[3907] = 4294967295; isPrintBitm[3908] = 4294967295; isPrintBitm[3909] = 4294967295; isPrintBitm[3910] = 8388511; 
isPrintBitm[3912] = 4294967295; isPrintBitm[3913] = 4294967295; isPrintBitm[3914] = 3288270847; isPrintBitm[3952] = 4294967279; 
isPrintBitm[3953] = 184024726; isPrintBitm[3954] = 2862017156; isPrintBitm[3955] = 1593309078; isPrintBitm[3956] = 268434431; 
isPrintBitm[3957] = 268434414; isPrintBitm[3959] = 196608; isPrintBitm[3968] = 4294967295; isPrintBitm[3969] = 4294905855; 
isPrintBitm[3970] = 4294967295; isPrintBitm[3971] = 4294967295; isPrintBitm[3972] = 1048575; isPrintBitm[3973] = 4294868991; 
isPrintBitm[3974] = 4294901758; isPrintBitm[3975] = 4194303; isPrintBitm[3976] = 4294909951; isPrintBitm[3977] = 4294934527; 
isPrintBitm[3978] = 4294967295; isPrintBitm[3979] = 4294905855; isPrintBitm[3980] = 4294967295; isPrintBitm[3981] = 8191; 
isPrintBitm[3983] = 4294967232; isPrintBitm[3984] = 4294901767; isPrintBitm[3985] = 268435455; isPrintBitm[3986] = 197119; 
isPrintBitm[3987] = 63; isPrintBitm[3992] = 4294967295; isPrintBitm[3993] = 4294967295; isPrintBitm[3994] = 4294967295; 
isPrintBitm[3995] = 4294967295; isPrintBitm[3996] = 4294967295; isPrintBitm[3997] = 4294967295; isPrintBitm[3998] = 4294967295; 
isPrintBitm[3999] = 4294967295; isPrintBitm[4000] = 4294967295; isPrintBitm[4001] = 4294967295; isPrintBitm[4002] = 4294967295; 
isPrintBitm[4003] = 4294967295; isPrintBitm[4004] = 4294967295; isPrintBitm[4005] = 4294967295; isPrintBitm[4006] = 4294967295; 
isPrintBitm[4007] = 4294967295; isPrintBitm[4008] = 4294967295; isPrintBitm[4009] = 4294967295; isPrintBitm[4010] = 4294967295; 
isPrintBitm[4011] = 4294967295; isPrintBitm[4012] = 4294967295; isPrintBitm[4013] = 4294967295; isPrintBitm[4014] = 4294967295; 
isPrintBitm[4015] = 4294967295; isPrintBitm[4016] = 4294967295; isPrintBitm[4017] = 4294967295; isPrintBitm[4018] = 4294967295; 
isPrintBitm[4019] = 4294967295; isPrintBitm[4020] = 4294967295; isPrintBitm[4021] = 4294967295; isPrintBitm[4022] = 2097151; 
isPrintBitm[4023] = 33497087; isPrintBitm[4024] = 4294967295; isPrintBitm[4025] = 4294967295; isPrintBitm[4026] = 4294967295; 
isPrintBitm[4027] = 1048575; isPrintBitm[4028] = 4294967295; isPrintBitm[4029] = 4294967295; isPrintBitm[4030] = 2097151; 
isPrintBitm[4032] = 4294905855; isPrintBitm[4033] = 4294967295; isPrintBitm[4034] = 67043583; isPrintBitm[4035] = 4294967295; 
isPrintBitm[4036] = 4294902015; isPrintBitm[4037] = 16383; isPrintBitm[4040] = 4294905855; isPrintBitm[4041] = 2147483647; 
isPrintBitm[4042] = 4294909951; isPrintBitm[4043] = 4095; isPrintBitm[4044] = 16777215; isPrintBitm[4046] = 4294901761; 
isPrintBitm[4047] = 127; isPrintBitm[4096] = 4294967295; isPrintBitm[4097] = 4294967295; isPrintBitm[4098] = 4294967295; 
isPrintBitm[4099] = 4294967295; isPrintBitm[4100] = 4294967295; isPrintBitm[4101] = 4294967295; isPrintBitm[4102] = 4294967295; 
isPrintBitm[4103] = 4294967295; isPrintBitm[4104] = 4294967295; isPrintBitm[4105] = 4294967295; isPrintBitm[4106] = 4294967295; 
isPrintBitm[4107] = 4294967295; isPrintBitm[4108] = 4294967295; isPrintBitm[4109] = 4294967295; isPrintBitm[4110] = 4294967295; 
isPrintBitm[4111] = 4294967295; isPrintBitm[4112] = 4294967295; isPrintBitm[4113] = 4294967295; isPrintBitm[4114] = 4294967295; 
isPrintBitm[4115] = 4294967295; isPrintBitm[4116] = 4294967295; isPrintBitm[4117] = 4294967295; isPrintBitm[4118] = 4294967295; 
isPrintBitm[4119] = 4294967295; isPrintBitm[4120] = 4294967295; isPrintBitm[4121] = 4294967295; isPrintBitm[4122] = 4294967295; 
isPrintBitm[4123] = 4294967295; isPrintBitm[4124] = 4294967295; isPrintBitm[4125] = 4294967295; isPrintBitm[4126] = 4294967295; 
isPrintBitm[4127] = 4294967295; isPrintBitm[4128] = 4294967295; isPrintBitm[4129] = 4294967295; isPrintBitm[4130] = 4294967295; 
isPrintBitm[4131] = 4294967295; isPrintBitm[4132] = 4294967295; isPrintBitm[4133] = 4294967295; isPrintBitm[4134] = 4294967295; 
isPrintBitm[4135] = 4294967295; isPrintBitm[4136] = 4294967295; isPrintBitm[4137] = 4294967295; isPrintBitm[4138] = 4294967295; 
isPrintBitm[4139] = 4294967295; isPrintBitm[4140] = 4294967295; isPrintBitm[4141] = 4294967295; isPrintBitm[4142] = 4294967295; 
isPrintBitm[4143] = 4294967295; isPrintBitm[4144] = 4294967295; isPrintBitm[4145] = 4294967295; isPrintBitm[4146] = 4294967295; 
isPrintBitm[4147] = 4294967295; isPrintBitm[4148] = 4294967295; isPrintBitm[4149] = 4294967295; isPrintBitm[4150] = 4294967295; 
isPrintBitm[4151] = 4294967295; isPrintBitm[4152] = 4294967295; isPrintBitm[4153] = 4294967295; isPrintBitm[4154] = 4294967295; 
isPrintBitm[4155] = 4294967295; isPrintBitm[4156] = 4294967295; isPrintBitm[4157] = 4294967295; isPrintBitm[4158] = 4294967295; 
isPrintBitm[4159] = 4294967295; isPrintBitm[4160] = 4294967295; isPrintBitm[4161] = 4294967295; isPrintBitm[4162] = 4294967295; 
isPrintBitm[4163] = 4294967295; isPrintBitm[4164] = 4294967295; isPrintBitm[4165] = 4294967295; isPrintBitm[4166] = 4294967295; 
isPrintBitm[4167] = 4294967295; isPrintBitm[4168] = 4294967295; isPrintBitm[4169] = 4294967295; isPrintBitm[4170] = 4294967295; 
isPrintBitm[4171] = 4294967295; isPrintBitm[4172] = 4294967295; isPrintBitm[4173] = 4294967295; isPrintBitm[4174] = 4294967295; 
isPrintBitm[4175] = 4294967295; isPrintBitm[4176] = 4294967295; isPrintBitm[4177] = 4294967295; isPrintBitm[4178] = 4294967295; 
isPrintBitm[4179] = 4294967295; isPrintBitm[4180] = 4294967295; isPrintBitm[4181] = 4294967295; isPrintBitm[4182] = 4294967295; 
isPrintBitm[4183] = 4294967295; isPrintBitm[4184] = 4294967295; isPrintBitm[4185] = 4294967295; isPrintBitm[4186] = 4294967295; 
isPrintBitm[4187] = 4294967295; isPrintBitm[4188] = 4294967295; isPrintBitm[4189] = 4294967295; isPrintBitm[4190] = 4294967295; 
isPrintBitm[4191] = 4294967295; isPrintBitm[4192] = 4294967295; isPrintBitm[4193] = 4294967295; isPrintBitm[4194] = 4294967295; 
isPrintBitm[4195] = 4294967295; isPrintBitm[4196] = 4294967295; isPrintBitm[4197] = 4294967295; isPrintBitm[4198] = 4294967295; 
isPrintBitm[4199] = 4294967295; isPrintBitm[4200] = 4294967295; isPrintBitm[4201] = 4294967295; isPrintBitm[4202] = 4294967295; 
isPrintBitm[4203] = 4294967295; isPrintBitm[4204] = 4294967295; isPrintBitm[4205] = 4294967295; isPrintBitm[4206] = 4294967295; 
isPrintBitm[4207] = 4294967295; isPrintBitm[4208] = 4294967295; isPrintBitm[4209] = 4294967295; isPrintBitm[4210] = 4294967295; 
isPrintBitm[4211] = 4294967295; isPrintBitm[4212] = 4294967295; isPrintBitm[4213] = 4294967295; isPrintBitm[4214] = 4294967295; 
isPrintBitm[4215] = 4294967295; isPrintBitm[4216] = 4294967295; isPrintBitm[4217] = 4294967295; isPrintBitm[4218] = 4294967295; 
isPrintBitm[4219] = 4294967295; isPrintBitm[4220] = 4294967295; isPrintBitm[4221] = 4294967295; isPrintBitm[4222] = 4294967295; 
isPrintBitm[4223] = 4294967295; isPrintBitm[4224] = 4294967295; isPrintBitm[4225] = 4294967295; isPrintBitm[4226] = 4294967295; 
isPrintBitm[4227] = 4294967295; isPrintBitm[4228] = 4294967295; isPrintBitm[4229] = 4294967295; isPrintBitm[4230] = 4294967295; 
isPrintBitm[4231] = 4294967295; isPrintBitm[4232] = 4294967295; isPrintBitm[4233] = 4294967295; isPrintBitm[4234] = 4294967295; 
isPrintBitm[4235] = 4294967295; isPrintBitm[4236] = 4294967295; isPrintBitm[4237] = 4294967295; isPrintBitm[4238] = 4294967295; 
isPrintBitm[4239] = 4294967295; isPrintBitm[4240] = 4294967295; isPrintBitm[4241] = 4294967295; isPrintBitm[4242] = 4294967295; 
isPrintBitm[4243] = 4294967295; isPrintBitm[4244] = 4294967295; isPrintBitm[4245] = 4294967295; isPrintBitm[4246] = 4294967295; 
isPrintBitm[4247] = 4294967295; isPrintBitm[4248] = 4294967295; isPrintBitm[4249] = 4294967295; isPrintBitm[4250] = 4294967295; 
isPrintBitm[4251] = 4294967295; isPrintBitm[4252] = 4294967295; isPrintBitm[4253] = 4294967295; isPrintBitm[4254] = 4294967295; 
isPrintBitm[4255] = 4294967295; isPrintBitm[4256] = 4294967295; isPrintBitm[4257] = 4294967295; isPrintBitm[4258] = 4294967295; 
isPrintBitm[4259] = 4294967295; isPrintBitm[4260] = 4294967295; isPrintBitm[4261] = 4294967295; isPrintBitm[4262] = 4294967295; 
isPrintBitm[4263] = 4294967295; isPrintBitm[4264] = 4294967295; isPrintBitm[4265] = 4294967295; isPrintBitm[4266] = 4294967295; 
isPrintBitm[4267] = 4294967295; isPrintBitm[4268] = 4294967295; isPrintBitm[4269] = 4294967295; isPrintBitm[4270] = 4294967295; 
isPrintBitm[4271] = 4294967295; isPrintBitm[4272] = 4294967295; isPrintBitm[4273] = 4294967295; isPrintBitm[4274] = 4294967295; 
isPrintBitm[4275] = 4294967295; isPrintBitm[4276] = 4294967295; isPrintBitm[4277] = 4294967295; isPrintBitm[4278] = 4294967295; 
isPrintBitm[4279] = 4294967295; isPrintBitm[4280] = 4294967295; isPrintBitm[4281] = 4294967295; isPrintBitm[4282] = 4294967295; 
isPrintBitm[4283] = 4294967295; isPrintBitm[4284] = 4294967295; isPrintBitm[4285] = 4294967295; isPrintBitm[4286] = 4294967295; 
isPrintBitm[4287] = 4294967295; isPrintBitm[4288] = 4294967295; isPrintBitm[4289] = 4294967295; isPrintBitm[4290] = 4294967295; 
isPrintBitm[4291] = 4294967295; isPrintBitm[4292] = 4294967295; isPrintBitm[4293] = 4294967295; isPrintBitm[4294] = 4294967295; 
isPrintBitm[4295] = 4294967295; isPrintBitm[4296] = 4294967295; isPrintBitm[4297] = 4294967295; isPrintBitm[4298] = 4294967295; 
isPrintBitm[4299] = 4294967295; isPrintBitm[4300] = 4294967295; isPrintBitm[4301] = 4294967295; isPrintBitm[4302] = 4294967295; 
isPrintBitm[4303] = 4294967295; isPrintBitm[4304] = 4294967295; isPrintBitm[4305] = 4294967295; isPrintBitm[4306] = 4294967295; 
isPrintBitm[4307] = 4294967295; isPrintBitm[4308] = 4294967295; isPrintBitm[4309] = 4294967295; isPrintBitm[4310] = 4294967295; 
isPrintBitm[4311] = 4294967295; isPrintBitm[4312] = 4294967295; isPrintBitm[4313] = 4294967295; isPrintBitm[4314] = 4294967295; 
isPrintBitm[4315] = 4294967295; isPrintBitm[4316] = 4294967295; isPrintBitm[4317] = 4294967295; isPrintBitm[4318] = 4294967295; 
isPrintBitm[4319] = 4294967295; isPrintBitm[4320] = 4294967295; isPrintBitm[4321] = 4294967295; isPrintBitm[4322] = 4294967295; 
isPrintBitm[4323] = 4294967295; isPrintBitm[4324] = 4294967295; isPrintBitm[4325] = 4294967295; isPrintBitm[4326] = 4294967295; 
isPrintBitm[4327] = 4294967295; isPrintBitm[4328] = 4294967295; isPrintBitm[4329] = 4294967295; isPrintBitm[4330] = 4294967295; 
isPrintBitm[4331] = 4294967295; isPrintBitm[4332] = 4294967295; isPrintBitm[4333] = 4294967295; isPrintBitm[4334] = 4294967295; 
isPrintBitm[4335] = 4294967295; isPrintBitm[4336] = 4294967295; isPrintBitm[4337] = 4294967295; isPrintBitm[4338] = 4294967295; 
isPrintBitm[4339] = 4294967295; isPrintBitm[4340] = 4294967295; isPrintBitm[4341] = 4294967295; isPrintBitm[4342] = 4294967295; 
isPrintBitm[4343] = 4294967295; isPrintBitm[4344] = 4294967295; isPrintBitm[4345] = 4294967295; isPrintBitm[4346] = 4294967295; 
isPrintBitm[4347] = 4294967295; isPrintBitm[4348] = 4294967295; isPrintBitm[4349] = 4294967295; isPrintBitm[4350] = 4294967295; 
isPrintBitm[4351] = 4294967295; isPrintBitm[4352] = 4294967295; isPrintBitm[4353] = 4294967295; isPrintBitm[4354] = 4294967295; 
isPrintBitm[4355] = 4294967295; isPrintBitm[4356] = 4294967295; isPrintBitm[4357] = 4294967295; isPrintBitm[4358] = 4294967295; 
isPrintBitm[4359] = 4294967295; isPrintBitm[4360] = 4294967295; isPrintBitm[4361] = 4294967295; isPrintBitm[4362] = 4294967295; 
isPrintBitm[4363] = 4294967295; isPrintBitm[4364] = 4294967295; isPrintBitm[4365] = 4294967295; isPrintBitm[4366] = 4294967295; 
isPrintBitm[4367] = 4294967295; isPrintBitm[4368] = 4294967295; isPrintBitm[4369] = 4294967295; isPrintBitm[4370] = 4294967295; 
isPrintBitm[4371] = 4294967295; isPrintBitm[4372] = 4294967295; isPrintBitm[4373] = 4294967295; isPrintBitm[4374] = 4294967295; 
isPrintBitm[4375] = 4294967295; isPrintBitm[4376] = 4294967295; isPrintBitm[4377] = 4294967295; isPrintBitm[4378] = 4294967295; 
isPrintBitm[4379] = 4294967295; isPrintBitm[4380] = 4294967295; isPrintBitm[4381] = 4294967295; isPrintBitm[4382] = 4294967295; 
isPrintBitm[4383] = 4294967295; isPrintBitm[4384] = 4294967295; isPrintBitm[4385] = 4294967295; isPrintBitm[4386] = 4294967295; 
isPrintBitm[4387] = 4294967295; isPrintBitm[4388] = 4294967295; isPrintBitm[4389] = 4294967295; isPrintBitm[4390] = 4294967295; 
isPrintBitm[4391] = 4294967295; isPrintBitm[4392] = 4294967295; isPrintBitm[4393] = 4294967295; isPrintBitm[4394] = 4294967295; 
isPrintBitm[4395] = 4294967295; isPrintBitm[4396] = 4294967295; isPrintBitm[4397] = 4294967295; isPrintBitm[4398] = 4294967295; 
isPrintBitm[4399] = 4294967295; isPrintBitm[4400] = 4294967295; isPrintBitm[4401] = 4294967295; isPrintBitm[4402] = 4294967295; 
isPrintBitm[4403] = 4294967295; isPrintBitm[4404] = 4294967295; isPrintBitm[4405] = 4294967295; isPrintBitm[4406] = 4294967295; 
isPrintBitm[4407] = 4294967295; isPrintBitm[4408] = 4294967295; isPrintBitm[4409] = 4294967295; isPrintBitm[4410] = 4294967295; 
isPrintBitm[4411] = 4294967295; isPrintBitm[4412] = 4294967295; isPrintBitm[4413] = 4294967295; isPrintBitm[4414] = 4294967295; 
isPrintBitm[4415] = 4294967295; isPrintBitm[4416] = 4294967295; isPrintBitm[4417] = 4294967295; isPrintBitm[4418] = 4294967295; 
isPrintBitm[4419] = 4294967295; isPrintBitm[4420] = 4294967295; isPrintBitm[4421] = 4294967295; isPrintBitm[4422] = 4294967295; 
isPrintBitm[4423] = 4294967295; isPrintBitm[4424] = 4294967295; isPrintBitm[4425] = 4294967295; isPrintBitm[4426] = 4294967295; 
isPrintBitm[4427] = 4294967295; isPrintBitm[4428] = 4294967295; isPrintBitm[4429] = 4294967295; isPrintBitm[4430] = 4294967295; 
isPrintBitm[4431] = 4294967295; isPrintBitm[4432] = 4294967295; isPrintBitm[4433] = 4294967295; isPrintBitm[4434] = 4294967295; 
isPrintBitm[4435] = 4294967295; isPrintBitm[4436] = 4294967295; isPrintBitm[4437] = 4294967295; isPrintBitm[4438] = 4294967295; 
isPrintBitm[4439] = 4294967295; isPrintBitm[4440] = 4294967295; isPrintBitm[4441] = 4294967295; isPrintBitm[4442] = 4294967295; 
isPrintBitm[4443] = 4294967295; isPrintBitm[4444] = 4294967295; isPrintBitm[4445] = 4294967295; isPrintBitm[4446] = 4294967295; 
isPrintBitm[4447] = 4294967295; isPrintBitm[4448] = 4294967295; isPrintBitm[4449] = 4294967295; isPrintBitm[4450] = 4294967295; 
isPrintBitm[4451] = 4294967295; isPrintBitm[4452] = 4294967295; isPrintBitm[4453] = 4294967295; isPrintBitm[4454] = 4294967295; 
isPrintBitm[4455] = 4294967295; isPrintBitm[4456] = 4294967295; isPrintBitm[4457] = 4294967295; isPrintBitm[4458] = 4294967295; 
isPrintBitm[4459] = 4294967295; isPrintBitm[4460] = 4294967295; isPrintBitm[4461] = 4294967295; isPrintBitm[4462] = 4294967295; 
isPrintBitm[4463] = 4294967295; isPrintBitm[4464] = 4294967295; isPrintBitm[4465] = 4294967295; isPrintBitm[4466] = 4294967295; 
isPrintBitm[4467] = 4294967295; isPrintBitm[4468] = 4294967295; isPrintBitm[4469] = 4294967295; isPrintBitm[4470] = 4294967295; 
isPrintBitm[4471] = 4294967295; isPrintBitm[4472] = 4294967295; isPrintBitm[4473] = 4294967295; isPrintBitm[4474] = 4294967295; 
isPrintBitm[4475] = 4294967295; isPrintBitm[4476] = 4294967295; isPrintBitm[4477] = 4294967295; isPrintBitm[4478] = 4294967295; 
isPrintBitm[4479] = 4294967295; isPrintBitm[4480] = 4294967295; isPrintBitm[4481] = 4294967295; isPrintBitm[4482] = 4294967295; 
isPrintBitm[4483] = 4294967295; isPrintBitm[4484] = 4294967295; isPrintBitm[4485] = 4294967295; isPrintBitm[4486] = 4294967295; 
isPrintBitm[4487] = 4294967295; isPrintBitm[4488] = 4294967295; isPrintBitm[4489] = 4294967295; isPrintBitm[4490] = 4294967295; 
isPrintBitm[4491] = 4294967295; isPrintBitm[4492] = 4294967295; isPrintBitm[4493] = 4294967295; isPrintBitm[4494] = 4294967295; 
isPrintBitm[4495] = 4294967295; isPrintBitm[4496] = 4294967295; isPrintBitm[4497] = 4294967295; isPrintBitm[4498] = 4294967295; 
isPrintBitm[4499] = 4294967295; isPrintBitm[4500] = 4294967295; isPrintBitm[4501] = 4294967295; isPrintBitm[4502] = 4294967295; 
isPrintBitm[4503] = 4294967295; isPrintBitm[4504] = 4294967295; isPrintBitm[4505] = 4294967295; isPrintBitm[4506] = 4294967295; 
isPrintBitm[4507] = 4294967295; isPrintBitm[4508] = 4294967295; isPrintBitm[4509] = 4294967295; isPrintBitm[4510] = 4294967295; 
isPrintBitm[4511] = 4294967295; isPrintBitm[4512] = 4294967295; isPrintBitm[4513] = 4294967295; isPrintBitm[4514] = 4294967295; 
isPrintBitm[4515] = 4294967295; isPrintBitm[4516] = 4294967295; isPrintBitm[4517] = 4294967295; isPrintBitm[4518] = 4294967295; 
isPrintBitm[4519] = 4294967295; isPrintBitm[4520] = 4294967295; isPrintBitm[4521] = 4294967295; isPrintBitm[4522] = 4294967295; 
isPrintBitm[4523] = 4294967295; isPrintBitm[4524] = 4294967295; isPrintBitm[4525] = 4294967295; isPrintBitm[4526] = 4294967295; 
isPrintBitm[4527] = 4294967295; isPrintBitm[4528] = 4294967295; isPrintBitm[4529] = 4294967295; isPrintBitm[4530] = 4294967295; 
isPrintBitm[4531] = 4294967295; isPrintBitm[4532] = 4294967295; isPrintBitm[4533] = 4294967295; isPrintBitm[4534] = 4294967295; 
isPrintBitm[4535] = 4294967295; isPrintBitm[4536] = 4294967295; isPrintBitm[4537] = 4294967295; isPrintBitm[4538] = 4294967295; 
isPrintBitm[4539] = 4294967295; isPrintBitm[4540] = 4294967295; isPrintBitm[4541] = 4294967295; isPrintBitm[4542] = 4294967295; 
isPrintBitm[4543] = 4294967295; isPrintBitm[4544] = 4294967295; isPrintBitm[4545] = 4294967295; isPrintBitm[4546] = 4294967295; 
isPrintBitm[4547] = 4294967295; isPrintBitm[4548] = 4294967295; isPrintBitm[4549] = 4294967295; isPrintBitm[4550] = 4294967295; 
isPrintBitm[4551] = 4294967295; isPrintBitm[4552] = 4294967295; isPrintBitm[4553] = 4294967295; isPrintBitm[4554] = 4294967295; 
isPrintBitm[4555] = 4294967295; isPrintBitm[4556] = 4294967295; isPrintBitm[4557] = 4294967295; isPrintBitm[4558] = 4294967295; 
isPrintBitm[4559] = 4294967295; isPrintBitm[4560] = 4294967295; isPrintBitm[4561] = 4294967295; isPrintBitm[4562] = 4294967295; 
isPrintBitm[4563] = 4294967295; isPrintBitm[4564] = 4294967295; isPrintBitm[4565] = 4294967295; isPrintBitm[4566] = 4294967295; 
isPrintBitm[4567] = 4294967295; isPrintBitm[4568] = 4294967295; isPrintBitm[4569] = 4294967295; isPrintBitm[4570] = 4294967295; 
isPrintBitm[4571] = 4294967295; isPrintBitm[4572] = 4294967295; isPrintBitm[4573] = 4294967295; isPrintBitm[4574] = 4294967295; 
isPrintBitm[4575] = 4294967295; isPrintBitm[4576] = 4294967295; isPrintBitm[4577] = 4294967295; isPrintBitm[4578] = 4294967295; 
isPrintBitm[4579] = 4294967295; isPrintBitm[4580] = 4294967295; isPrintBitm[4581] = 4294967295; isPrintBitm[4582] = 4294967295; 
isPrintBitm[4583] = 4294967295; isPrintBitm[4584] = 4294967295; isPrintBitm[4585] = 4294967295; isPrintBitm[4586] = 4294967295; 
isPrintBitm[4587] = 4294967295; isPrintBitm[4588] = 4294967295; isPrintBitm[4589] = 4294967295; isPrintBitm[4590] = 4294967295; 
isPrintBitm[4591] = 4294967295; isPrintBitm[4592] = 4294967295; isPrintBitm[4593] = 4294967295; isPrintBitm[4594] = 4294967295; 
isPrintBitm[4595] = 4294967295; isPrintBitm[4596] = 4294967295; isPrintBitm[4597] = 4294967295; isPrintBitm[4598] = 4294967295; 
isPrintBitm[4599] = 4294967295; isPrintBitm[4600] = 4294967295; isPrintBitm[4601] = 4294967295; isPrintBitm[4602] = 4294967295; 
isPrintBitm[4603] = 4294967295; isPrintBitm[4604] = 4294967295; isPrintBitm[4605] = 4294967295; isPrintBitm[4606] = 4294967295; 
isPrintBitm[4607] = 4294967295; isPrintBitm[4608] = 4294967295; isPrintBitm[4609] = 4294967295; isPrintBitm[4610] = 4294967295; 
isPrintBitm[4611] = 4294967295; isPrintBitm[4612] = 4294967295; isPrintBitm[4613] = 4294967295; isPrintBitm[4614] = 4294967295; 
isPrintBitm[4615] = 4294967295; isPrintBitm[4616] = 4294967295; isPrintBitm[4617] = 4294967295; isPrintBitm[4618] = 4294967295; 
isPrintBitm[4619] = 4294967295; isPrintBitm[4620] = 4294967295; isPrintBitm[4621] = 4294967295; isPrintBitm[4622] = 4294967295; 
isPrintBitm[4623] = 4294967295; isPrintBitm[4624] = 4294967295; isPrintBitm[4625] = 4294967295; isPrintBitm[4626] = 4294967295; 
isPrintBitm[4627] = 4294967295; isPrintBitm[4628] = 4294967295; isPrintBitm[4629] = 4294967295; isPrintBitm[4630] = 4294967295; 
isPrintBitm[4631] = 4294967295; isPrintBitm[4632] = 4294967295; isPrintBitm[4633] = 4294967295; isPrintBitm[4634] = 4294967295; 
isPrintBitm[4635] = 4294967295; isPrintBitm[4636] = 4294967295; isPrintBitm[4637] = 4294967295; isPrintBitm[4638] = 4294967295; 
isPrintBitm[4639] = 4294967295; isPrintBitm[4640] = 4294967295; isPrintBitm[4641] = 4294967295; isPrintBitm[4642] = 4294967295; 
isPrintBitm[4643] = 4294967295; isPrintBitm[4644] = 4294967295; isPrintBitm[4645] = 4294967295; isPrintBitm[4646] = 4294967295; 
isPrintBitm[4647] = 4294967295; isPrintBitm[4648] = 4294967295; isPrintBitm[4649] = 4294967295; isPrintBitm[4650] = 4294967295; 
isPrintBitm[4651] = 4294967295; isPrintBitm[4652] = 4294967295; isPrintBitm[4653] = 4294967295; isPrintBitm[4654] = 4294967295; 
isPrintBitm[4655] = 4294967295; isPrintBitm[4656] = 4294967295; isPrintBitm[4657] = 4294967295; isPrintBitm[4658] = 4294967295; 
isPrintBitm[4659] = 4294967295; isPrintBitm[4660] = 4294967295; isPrintBitm[4661] = 4294967295; isPrintBitm[4662] = 4294967295; 
isPrintBitm[4663] = 4294967295; isPrintBitm[4664] = 4294967295; isPrintBitm[4665] = 4294967295; isPrintBitm[4666] = 4294967295; 
isPrintBitm[4667] = 4294967295; isPrintBitm[4668] = 4294967295; isPrintBitm[4669] = 4294967295; isPrintBitm[4670] = 4294967295; 
isPrintBitm[4671] = 4294967295; isPrintBitm[4672] = 4294967295; isPrintBitm[4673] = 4294967295; isPrintBitm[4674] = 4294967295; 
isPrintBitm[4675] = 4294967295; isPrintBitm[4676] = 4294967295; isPrintBitm[4677] = 4294967295; isPrintBitm[4678] = 4294967295; 
isPrintBitm[4679] = 4294967295; isPrintBitm[4680] = 4294967295; isPrintBitm[4681] = 4294967295; isPrintBitm[4682] = 4294967295; 
isPrintBitm[4683] = 4294967295; isPrintBitm[4684] = 4294967295; isPrintBitm[4685] = 4294967295; isPrintBitm[4686] = 4294967295; 
isPrintBitm[4687] = 4294967295; isPrintBitm[4688] = 4294967295; isPrintBitm[4689] = 4294967295; isPrintBitm[4690] = 4294967295; 
isPrintBitm[4691] = 4294967295; isPrintBitm[4692] = 4294967295; isPrintBitm[4693] = 4294967295; isPrintBitm[4694] = 4294967295; 
isPrintBitm[4695] = 4294967295; isPrintBitm[4696] = 4294967295; isPrintBitm[4697] = 4294967295; isPrintBitm[4698] = 4294967295; 
isPrintBitm[4699] = 4294967295; isPrintBitm[4700] = 4294967295; isPrintBitm[4701] = 4294967295; isPrintBitm[4702] = 4294967295; 
isPrintBitm[4703] = 4294967295; isPrintBitm[4704] = 4294967295; isPrintBitm[4705] = 4294967295; isPrintBitm[4706] = 4294967295; 
isPrintBitm[4707] = 4294967295; isPrintBitm[4708] = 4294967295; isPrintBitm[4709] = 4294967295; isPrintBitm[4710] = 4294967295; 
isPrintBitm[4711] = 4294967295; isPrintBitm[4712] = 4294967295; isPrintBitm[4713] = 4294967295; isPrintBitm[4714] = 4294967295; 
isPrintBitm[4715] = 4294967295; isPrintBitm[4716] = 4294967295; isPrintBitm[4717] = 4294967295; isPrintBitm[4718] = 4294967295; 
isPrintBitm[4719] = 4294967295; isPrintBitm[4720] = 4294967295; isPrintBitm[4721] = 4294967295; isPrintBitm[4722] = 4294967295; 
isPrintBitm[4723] = 4294967295; isPrintBitm[4724] = 4294967295; isPrintBitm[4725] = 4294967295; isPrintBitm[4726] = 4294967295; 
isPrintBitm[4727] = 4294967295; isPrintBitm[4728] = 4294967295; isPrintBitm[4729] = 4294967295; isPrintBitm[4730] = 4294967295; 
isPrintBitm[4731] = 4294967295; isPrintBitm[4732] = 4294967295; isPrintBitm[4733] = 4294967295; isPrintBitm[4734] = 4294967295; 
isPrintBitm[4735] = 4294967295; isPrintBitm[4736] = 4294967295; isPrintBitm[4737] = 4294967295; isPrintBitm[4738] = 4294967295; 
isPrintBitm[4739] = 4294967295; isPrintBitm[4740] = 4294967295; isPrintBitm[4741] = 4294967295; isPrintBitm[4742] = 4294967295; 
isPrintBitm[4743] = 4294967295; isPrintBitm[4744] = 4294967295; isPrintBitm[4745] = 4294967295; isPrintBitm[4746] = 4294967295; 
isPrintBitm[4747] = 4294967295; isPrintBitm[4748] = 4294967295; isPrintBitm[4749] = 4294967295; isPrintBitm[4750] = 4294967295; 
isPrintBitm[4751] = 4294967295; isPrintBitm[4752] = 4294967295; isPrintBitm[4753] = 4294967295; isPrintBitm[4754] = 4294967295; 
isPrintBitm[4755] = 4294967295; isPrintBitm[4756] = 4294967295; isPrintBitm[4757] = 4294967295; isPrintBitm[4758] = 4294967295; 
isPrintBitm[4759] = 4294967295; isPrintBitm[4760] = 4294967295; isPrintBitm[4761] = 4294967295; isPrintBitm[4762] = 4294967295; 
isPrintBitm[4763] = 4294967295; isPrintBitm[4764] = 4294967295; isPrintBitm[4765] = 4294967295; isPrintBitm[4766] = 4294967295; 
isPrintBitm[4767] = 4294967295; isPrintBitm[4768] = 4294967295; isPrintBitm[4769] = 4294967295; isPrintBitm[4770] = 4294967295; 
isPrintBitm[4771] = 4294967295; isPrintBitm[4772] = 4294967295; isPrintBitm[4773] = 4294967295; isPrintBitm[4774] = 4294967295; 
isPrintBitm[4775] = 4294967295; isPrintBitm[4776] = 4294967295; isPrintBitm[4777] = 4294967295; isPrintBitm[4778] = 4294967295; 
isPrintBitm[4779] = 4294967295; isPrintBitm[4780] = 4294967295; isPrintBitm[4781] = 4294967295; isPrintBitm[4782] = 4294967295; 
isPrintBitm[4783] = 4294967295; isPrintBitm[4784] = 4294967295; isPrintBitm[4785] = 4294967295; isPrintBitm[4786] = 4294967295; 
isPrintBitm[4787] = 4294967295; isPrintBitm[4788] = 4294967295; isPrintBitm[4789] = 4294967295; isPrintBitm[4790] = 4294967295; 
isPrintBitm[4791] = 4294967295; isPrintBitm[4792] = 4294967295; isPrintBitm[4793] = 4294967295; isPrintBitm[4794] = 4294967295; 
isPrintBitm[4795] = 4294967295; isPrintBitm[4796] = 4294967295; isPrintBitm[4797] = 4294967295; isPrintBitm[4798] = 4294967295; 
isPrintBitm[4799] = 4294967295; isPrintBitm[4800] = 4294967295; isPrintBitm[4801] = 4294967295; isPrintBitm[4802] = 4294967295; 
isPrintBitm[4803] = 4294967295; isPrintBitm[4804] = 4294967295; isPrintBitm[4805] = 4294967295; isPrintBitm[4806] = 4294967295; 
isPrintBitm[4807] = 4294967295; isPrintBitm[4808] = 4294967295; isPrintBitm[4809] = 4294967295; isPrintBitm[4810] = 4294967295; 
isPrintBitm[4811] = 4294967295; isPrintBitm[4812] = 4294967295; isPrintBitm[4813] = 4294967295; isPrintBitm[4814] = 4294967295; 
isPrintBitm[4815] = 4294967295; isPrintBitm[4816] = 4294967295; isPrintBitm[4817] = 4294967295; isPrintBitm[4818] = 4294967295; 
isPrintBitm[4819] = 4294967295; isPrintBitm[4820] = 4294967295; isPrintBitm[4821] = 4294967295; isPrintBitm[4822] = 4294967295; 
isPrintBitm[4823] = 4294967295; isPrintBitm[4824] = 4294967295; isPrintBitm[4825] = 4294967295; isPrintBitm[4826] = 4294967295; 
isPrintBitm[4827] = 4294967295; isPrintBitm[4828] = 4294967295; isPrintBitm[4829] = 4294967295; isPrintBitm[4830] = 4294967295; 
isPrintBitm[4831] = 4294967295; isPrintBitm[4832] = 4294967295; isPrintBitm[4833] = 4294967295; isPrintBitm[4834] = 4294967295; 
isPrintBitm[4835] = 4294967295; isPrintBitm[4836] = 4294967295; isPrintBitm[4837] = 4294967295; isPrintBitm[4838] = 4294967295; 
isPrintBitm[4839] = 4294967295; isPrintBitm[4840] = 4294967295; isPrintBitm[4841] = 4294967295; isPrintBitm[4842] = 4294967295; 
isPrintBitm[4843] = 4294967295; isPrintBitm[4844] = 4294967295; isPrintBitm[4845] = 4294967295; isPrintBitm[4846] = 4294967295; 
isPrintBitm[4847] = 4294967295; isPrintBitm[4848] = 4294967295; isPrintBitm[4849] = 4294967295; isPrintBitm[4850] = 4294967295; 
isPrintBitm[4851] = 4294967295; isPrintBitm[4852] = 4294967295; isPrintBitm[4853] = 4294967295; isPrintBitm[4854] = 4294967295; 
isPrintBitm[4855] = 4294967295; isPrintBitm[4856] = 4294967295; isPrintBitm[4857] = 4294967295; isPrintBitm[4858] = 4294967295; 
isPrintBitm[4859] = 4294967295; isPrintBitm[4860] = 4294967295; isPrintBitm[4861] = 4294967295; isPrintBitm[4862] = 4294967295; 
isPrintBitm[4863] = 4294967295; isPrintBitm[4864] = 4294967295; isPrintBitm[4865] = 4294967295; isPrintBitm[4866] = 4294967295; 
isPrintBitm[4867] = 4294967295; isPrintBitm[4868] = 4294967295; isPrintBitm[4869] = 4294967295; isPrintBitm[4870] = 4294967295; 
isPrintBitm[4871] = 4294967295; isPrintBitm[4872] = 4294967295; isPrintBitm[4873] = 4294967295; isPrintBitm[4874] = 4294967295; 
isPrintBitm[4875] = 4294967295; isPrintBitm[4876] = 4294967295; isPrintBitm[4877] = 4294967295; isPrintBitm[4878] = 4294967295; 
isPrintBitm[4879] = 4294967295; isPrintBitm[4880] = 4294967295; isPrintBitm[4881] = 4294967295; isPrintBitm[4882] = 4294967295; 
isPrintBitm[4883] = 4294967295; isPrintBitm[4884] = 4294967295; isPrintBitm[4885] = 4294967295; isPrintBitm[4886] = 4294967295; 
isPrintBitm[4887] = 4294967295; isPrintBitm[4888] = 4294967295; isPrintBitm[4889] = 4294967295; isPrintBitm[4890] = 4294967295; 
isPrintBitm[4891] = 4294967295; isPrintBitm[4892] = 4294967295; isPrintBitm[4893] = 4294967295; isPrintBitm[4894] = 4294967295; 
isPrintBitm[4895] = 4294967295; isPrintBitm[4896] = 4294967295; isPrintBitm[4897] = 4294967295; isPrintBitm[4898] = 4294967295; 
isPrintBitm[4899] = 4294967295; isPrintBitm[4900] = 4294967295; isPrintBitm[4901] = 4294967295; isPrintBitm[4902] = 4294967295; 
isPrintBitm[4903] = 4294967295; isPrintBitm[4904] = 4294967295; isPrintBitm[4905] = 4294967295; isPrintBitm[4906] = 4294967295; 
isPrintBitm[4907] = 4294967295; isPrintBitm[4908] = 4294967295; isPrintBitm[4909] = 4294967295; isPrintBitm[4910] = 4294967295; 
isPrintBitm[4911] = 4294967295; isPrintBitm[4912] = 4294967295; isPrintBitm[4913] = 4294967295; isPrintBitm[4914] = 4294967295; 
isPrintBitm[4915] = 4294967295; isPrintBitm[4916] = 4294967295; isPrintBitm[4917] = 4294967295; isPrintBitm[4918] = 4294967295; 
isPrintBitm[4919] = 4294967295; isPrintBitm[4920] = 4294967295; isPrintBitm[4921] = 4294967295; isPrintBitm[4922] = 4294967295; 
isPrintBitm[4923] = 4294967295; isPrintBitm[4924] = 4294967295; isPrintBitm[4925] = 4294967295; isPrintBitm[4926] = 4294967295; 
isPrintBitm[4927] = 4294967295; isPrintBitm[4928] = 4294967295; isPrintBitm[4929] = 4294967295; isPrintBitm[4930] = 4294967295; 
isPrintBitm[4931] = 4294967295; isPrintBitm[4932] = 4294967295; isPrintBitm[4933] = 4294967295; isPrintBitm[4934] = 4294967295; 
isPrintBitm[4935] = 4294967295; isPrintBitm[4936] = 4294967295; isPrintBitm[4937] = 4294967295; isPrintBitm[4938] = 4294967295; 
isPrintBitm[4939] = 4294967295; isPrintBitm[4940] = 4294967295; isPrintBitm[4941] = 4294967295; isPrintBitm[4942] = 4294967295; 
isPrintBitm[4943] = 4294967295; isPrintBitm[4944] = 4294967295; isPrintBitm[4945] = 4294967295; isPrintBitm[4946] = 4294967295; 
isPrintBitm[4947] = 4294967295; isPrintBitm[4948] = 4294967295; isPrintBitm[4949] = 4294967295; isPrintBitm[4950] = 4294967295; 
isPrintBitm[4951] = 4294967295; isPrintBitm[4952] = 4294967295; isPrintBitm[4953] = 4294967295; isPrintBitm[4954] = 4294967295; 
isPrintBitm[4955] = 4294967295; isPrintBitm[4956] = 4294967295; isPrintBitm[4957] = 4294967295; isPrintBitm[4958] = 4294967295; 
isPrintBitm[4959] = 4294967295; isPrintBitm[4960] = 4294967295; isPrintBitm[4961] = 4294967295; isPrintBitm[4962] = 4294967295; 
isPrintBitm[4963] = 4294967295; isPrintBitm[4964] = 4294967295; isPrintBitm[4965] = 4294967295; isPrintBitm[4966] = 4294967295; 
isPrintBitm[4967] = 4294967295; isPrintBitm[4968] = 4294967295; isPrintBitm[4969] = 4294967295; isPrintBitm[4970] = 4294967295; 
isPrintBitm[4971] = 4294967295; isPrintBitm[4972] = 4294967295; isPrintBitm[4973] = 4294967295; isPrintBitm[4974] = 4294967295; 
isPrintBitm[4975] = 4294967295; isPrintBitm[4976] = 4294967295; isPrintBitm[4977] = 4294967295; isPrintBitm[4978] = 4294967295; 
isPrintBitm[4979] = 4294967295; isPrintBitm[4980] = 4294967295; isPrintBitm[4981] = 4294967295; isPrintBitm[4982] = 4294967295; 
isPrintBitm[4983] = 4294967295; isPrintBitm[4984] = 4294967295; isPrintBitm[4985] = 4294967295; isPrintBitm[4986] = 4294967295; 
isPrintBitm[4987] = 4294967295; isPrintBitm[4988] = 4294967295; isPrintBitm[4989] = 4294967295; isPrintBitm[4990] = 4294967295; 
isPrintBitm[4991] = 4294967295; isPrintBitm[4992] = 4294967295; isPrintBitm[4993] = 4294967295; isPrintBitm[4994] = 4294967295; 
isPrintBitm[4995] = 4294967295; isPrintBitm[4996] = 4294967295; isPrintBitm[4997] = 4294967295; isPrintBitm[4998] = 4294967295; 
isPrintBitm[4999] = 4294967295; isPrintBitm[5000] = 4294967295; isPrintBitm[5001] = 4294967295; isPrintBitm[5002] = 4294967295; 
isPrintBitm[5003] = 4294967295; isPrintBitm[5004] = 4294967295; isPrintBitm[5005] = 4294967295; isPrintBitm[5006] = 4294967295; 
isPrintBitm[5007] = 4294967295; isPrintBitm[5008] = 4294967295; isPrintBitm[5009] = 4294967295; isPrintBitm[5010] = 4294967295; 
isPrintBitm[5011] = 4294967295; isPrintBitm[5012] = 4294967295; isPrintBitm[5013] = 4294967295; isPrintBitm[5014] = 4294967295; 
isPrintBitm[5015] = 4294967295; isPrintBitm[5016] = 4294967295; isPrintBitm[5017] = 4294967295; isPrintBitm[5018] = 4294967295; 
isPrintBitm[5019] = 4294967295; isPrintBitm[5020] = 4294967295; isPrintBitm[5021] = 4294967295; isPrintBitm[5022] = 4294967295; 
isPrintBitm[5023] = 4294967295; isPrintBitm[5024] = 4294967295; isPrintBitm[5025] = 4294967295; isPrintBitm[5026] = 4294967295; 
isPrintBitm[5027] = 4294967295; isPrintBitm[5028] = 4294967295; isPrintBitm[5029] = 4294967295; isPrintBitm[5030] = 4294967295; 
isPrintBitm[5031] = 4294967295; isPrintBitm[5032] = 4294967295; isPrintBitm[5033] = 4294967295; isPrintBitm[5034] = 4294967295; 
isPrintBitm[5035] = 4294967295; isPrintBitm[5036] = 4294967295; isPrintBitm[5037] = 4294967295; isPrintBitm[5038] = 4294967295; 
isPrintBitm[5039] = 4294967295; isPrintBitm[5040] = 4294967295; isPrintBitm[5041] = 4294967295; isPrintBitm[5042] = 4294967295; 
isPrintBitm[5043] = 4294967295; isPrintBitm[5044] = 4294967295; isPrintBitm[5045] = 4294967295; isPrintBitm[5046] = 4294967295; 
isPrintBitm[5047] = 4294967295; isPrintBitm[5048] = 4294967295; isPrintBitm[5049] = 4294967295; isPrintBitm[5050] = 4294967295; 
isPrintBitm[5051] = 4294967295; isPrintBitm[5052] = 4294967295; isPrintBitm[5053] = 4294967295; isPrintBitm[5054] = 4294967295; 
isPrintBitm[5055] = 4294967295; isPrintBitm[5056] = 4294967295; isPrintBitm[5057] = 4294967295; isPrintBitm[5058] = 4294967295; 
isPrintBitm[5059] = 4294967295; isPrintBitm[5060] = 4294967295; isPrintBitm[5061] = 4294967295; isPrintBitm[5062] = 4294967295; 
isPrintBitm[5063] = 4294967295; isPrintBitm[5064] = 4294967295; isPrintBitm[5065] = 4294967295; isPrintBitm[5066] = 4294967295; 
isPrintBitm[5067] = 4294967295; isPrintBitm[5068] = 4294967295; isPrintBitm[5069] = 4294967295; isPrintBitm[5070] = 4294967295; 
isPrintBitm[5071] = 4294967295; isPrintBitm[5072] = 4294967295; isPrintBitm[5073] = 4294967295; isPrintBitm[5074] = 4294967295; 
isPrintBitm[5075] = 4294967295; isPrintBitm[5076] = 4294967295; isPrintBitm[5077] = 4294967295; isPrintBitm[5078] = 4294967295; 
isPrintBitm[5079] = 4294967295; isPrintBitm[5080] = 4294967295; isPrintBitm[5081] = 4294967295; isPrintBitm[5082] = 4294967295; 
isPrintBitm[5083] = 4294967295; isPrintBitm[5084] = 4294967295; isPrintBitm[5085] = 4294967295; isPrintBitm[5086] = 4294967295; 
isPrintBitm[5087] = 4294967295; isPrintBitm[5088] = 4294967295; isPrintBitm[5089] = 4294967295; isPrintBitm[5090] = 4294967295; 
isPrintBitm[5091] = 4294967295; isPrintBitm[5092] = 4294967295; isPrintBitm[5093] = 4294967295; isPrintBitm[5094] = 4294967295; 
isPrintBitm[5095] = 4294967295; isPrintBitm[5096] = 4294967295; isPrintBitm[5097] = 4294967295; isPrintBitm[5098] = 4294967295; 
isPrintBitm[5099] = 4294967295; isPrintBitm[5100] = 4294967295; isPrintBitm[5101] = 4294967295; isPrintBitm[5102] = 4294967295; 
isPrintBitm[5103] = 4294967295; isPrintBitm[5104] = 4294967295; isPrintBitm[5105] = 4294967295; isPrintBitm[5106] = 4294967295; 
isPrintBitm[5107] = 4294967295; isPrintBitm[5108] = 4294967295; isPrintBitm[5109] = 4294967295; isPrintBitm[5110] = 4294967295; 
isPrintBitm[5111] = 4294967295; isPrintBitm[5112] = 4294967295; isPrintBitm[5113] = 4294967295; isPrintBitm[5114] = 4294967295; 
isPrintBitm[5115] = 4294967295; isPrintBitm[5116] = 4294967295; isPrintBitm[5117] = 4294967295; isPrintBitm[5118] = 4294967295; 
isPrintBitm[5119] = 4294967295; isPrintBitm[5120] = 4294967295; isPrintBitm[5121] = 4294967295; isPrintBitm[5122] = 4294967295; 
isPrintBitm[5123] = 4294967295; isPrintBitm[5124] = 4294967295; isPrintBitm[5125] = 4294967295; isPrintBitm[5126] = 4294967295; 
isPrintBitm[5127] = 4294967295; isPrintBitm[5128] = 4294967295; isPrintBitm[5129] = 4294967295; isPrintBitm[5130] = 4294967295; 
isPrintBitm[5131] = 4294967295; isPrintBitm[5132] = 4294967295; isPrintBitm[5133] = 4294967295; isPrintBitm[5134] = 4294967295; 
isPrintBitm[5135] = 4294967295; isPrintBitm[5136] = 4294967295; isPrintBitm[5137] = 4294967295; isPrintBitm[5138] = 4294967295; 
isPrintBitm[5139] = 4294967295; isPrintBitm[5140] = 4294967295; isPrintBitm[5141] = 4294967295; isPrintBitm[5142] = 4294967295; 
isPrintBitm[5143] = 4294967295; isPrintBitm[5144] = 4294967295; isPrintBitm[5145] = 4294967295; isPrintBitm[5146] = 4294967295; 
isPrintBitm[5147] = 4294967295; isPrintBitm[5148] = 4294967295; isPrintBitm[5149] = 4294967295; isPrintBitm[5150] = 4294967295; 
isPrintBitm[5151] = 4294967295; isPrintBitm[5152] = 4294967295; isPrintBitm[5153] = 4294967295; isPrintBitm[5154] = 4294967295; 
isPrintBitm[5155] = 4294967295; isPrintBitm[5156] = 4294967295; isPrintBitm[5157] = 4294967295; isPrintBitm[5158] = 4294967295; 
isPrintBitm[5159] = 4294967295; isPrintBitm[5160] = 4294967295; isPrintBitm[5161] = 4294967295; isPrintBitm[5162] = 4294967295; 
isPrintBitm[5163] = 4294967295; isPrintBitm[5164] = 4294967295; isPrintBitm[5165] = 4294967295; isPrintBitm[5166] = 4294967295; 
isPrintBitm[5167] = 4294967295; isPrintBitm[5168] = 4294967295; isPrintBitm[5169] = 4294967295; isPrintBitm[5170] = 4294967295; 
isPrintBitm[5171] = 4294967295; isPrintBitm[5172] = 4294967295; isPrintBitm[5173] = 4294967295; isPrintBitm[5174] = 4294967295; 
isPrintBitm[5175] = 4294967295; isPrintBitm[5176] = 4294967295; isPrintBitm[5177] = 4294967295; isPrintBitm[5178] = 4294967295; 
isPrintBitm[5179] = 4294967295; isPrintBitm[5180] = 4294967295; isPrintBitm[5181] = 4294967295; isPrintBitm[5182] = 4294967295; 
isPrintBitm[5183] = 4294967295; isPrintBitm[5184] = 4294967295; isPrintBitm[5185] = 4294967295; isPrintBitm[5186] = 4294967295; 
isPrintBitm[5187] = 4294967295; isPrintBitm[5188] = 4294967295; isPrintBitm[5189] = 4294967295; isPrintBitm[5190] = 4294967295; 
isPrintBitm[5191] = 4294967295; isPrintBitm[5192] = 4294967295; isPrintBitm[5193] = 4294967295; isPrintBitm[5194] = 4294967295; 
isPrintBitm[5195] = 4294967295; isPrintBitm[5196] = 4294967295; isPrintBitm[5197] = 4294967295; isPrintBitm[5198] = 4294967295; 
isPrintBitm[5199] = 4294967295; isPrintBitm[5200] = 4294967295; isPrintBitm[5201] = 4294967295; isPrintBitm[5202] = 4294967295; 
isPrintBitm[5203] = 4294967295; isPrintBitm[5204] = 4294967295; isPrintBitm[5205] = 4294967295; isPrintBitm[5206] = 4294967295; 
isPrintBitm[5207] = 4294967295; isPrintBitm[5208] = 4294967295; isPrintBitm[5209] = 4294967295; isPrintBitm[5210] = 4294967295; 
isPrintBitm[5211] = 4294967295; isPrintBitm[5212] = 4294967295; isPrintBitm[5213] = 4294967295; isPrintBitm[5214] = 4294967295; 
isPrintBitm[5215] = 4294967295; isPrintBitm[5216] = 4294967295; isPrintBitm[5217] = 4294967295; isPrintBitm[5218] = 4294967295; 
isPrintBitm[5219] = 4294967295; isPrintBitm[5220] = 4294967295; isPrintBitm[5221] = 4294967295; isPrintBitm[5222] = 4294967295; 
isPrintBitm[5223] = 4294967295; isPrintBitm[5224] = 4294967295; isPrintBitm[5225] = 4294967295; isPrintBitm[5226] = 4294967295; 
isPrintBitm[5227] = 4294967295; isPrintBitm[5228] = 4294967295; isPrintBitm[5229] = 4294967295; isPrintBitm[5230] = 4294967295; 
isPrintBitm[5231] = 4294967295; isPrintBitm[5232] = 4294967295; isPrintBitm[5233] = 4294967295; isPrintBitm[5234] = 4294967295; 
isPrintBitm[5235] = 4294967295; isPrintBitm[5236] = 4294967295; isPrintBitm[5237] = 4294967295; isPrintBitm[5238] = 4294967295; 
isPrintBitm[5239] = 4294967295; isPrintBitm[5240] = 4294967295; isPrintBitm[5241] = 4294967295; isPrintBitm[5242] = 4294967295; 
isPrintBitm[5243] = 4294967295; isPrintBitm[5244] = 4294967295; isPrintBitm[5245] = 4294967295; isPrintBitm[5246] = 4294967295; 
isPrintBitm[5247] = 4294967295; isPrintBitm[5248] = 4294967295; isPrintBitm[5249] = 4294967295; isPrintBitm[5250] = 4294967295; 
isPrintBitm[5251] = 4294967295; isPrintBitm[5252] = 4294967295; isPrintBitm[5253] = 4294967295; isPrintBitm[5254] = 4294967295; 
isPrintBitm[5255] = 4294967295; isPrintBitm[5256] = 4294967295; isPrintBitm[5257] = 4294967295; isPrintBitm[5258] = 4294967295; 
isPrintBitm[5259] = 4294967295; isPrintBitm[5260] = 4294967295; isPrintBitm[5261] = 4294967295; isPrintBitm[5262] = 4294967295; 
isPrintBitm[5263] = 4294967295; isPrintBitm[5264] = 4294967295; isPrintBitm[5265] = 4294967295; isPrintBitm[5266] = 4294967295; 
isPrintBitm[5267] = 4294967295; isPrintBitm[5268] = 4294967295; isPrintBitm[5269] = 4294967295; isPrintBitm[5270] = 4294967295; 
isPrintBitm[5271] = 4294967295; isPrintBitm[5272] = 4294967295; isPrintBitm[5273] = 4294967295; isPrintBitm[5274] = 4294967295; 
isPrintBitm[5275] = 4294967295; isPrintBitm[5276] = 4294967295; isPrintBitm[5277] = 4294967295; isPrintBitm[5278] = 4294967295; 
isPrintBitm[5279] = 4294967295; isPrintBitm[5280] = 4294967295; isPrintBitm[5281] = 4294967295; isPrintBitm[5282] = 4294967295; 
isPrintBitm[5283] = 4294967295; isPrintBitm[5284] = 4294967295; isPrintBitm[5285] = 4294967295; isPrintBitm[5286] = 4294967295; 
isPrintBitm[5287] = 4294967295; isPrintBitm[5288] = 4294967295; isPrintBitm[5289] = 4294967295; isPrintBitm[5290] = 4294967295; 
isPrintBitm[5291] = 4294967295; isPrintBitm[5292] = 4294967295; isPrintBitm[5293] = 4294967295; isPrintBitm[5294] = 4294967295; 
isPrintBitm[5295] = 4294967295; isPrintBitm[5296] = 4294967295; isPrintBitm[5297] = 4294967295; isPrintBitm[5298] = 4294967295; 
isPrintBitm[5299] = 4294967295; isPrintBitm[5300] = 4294967295; isPrintBitm[5301] = 4294967295; isPrintBitm[5302] = 4294967295; 
isPrintBitm[5303] = 4294967295; isPrintBitm[5304] = 4294967295; isPrintBitm[5305] = 4294967295; isPrintBitm[5306] = 4294967295; 
isPrintBitm[5307] = 4294967295; isPrintBitm[5308] = 4294967295; isPrintBitm[5309] = 4294967295; isPrintBitm[5310] = 4294967295; 
isPrintBitm[5311] = 4294967295; isPrintBitm[5312] = 4294967295; isPrintBitm[5313] = 4294967295; isPrintBitm[5314] = 4294967295; 
isPrintBitm[5315] = 4294967295; isPrintBitm[5316] = 4294967295; isPrintBitm[5317] = 4294967295; isPrintBitm[5318] = 4294967295; 
isPrintBitm[5319] = 4294967295; isPrintBitm[5320] = 4294967295; isPrintBitm[5321] = 4294967295; isPrintBitm[5322] = 4294967295; 
isPrintBitm[5323] = 4294967295; isPrintBitm[5324] = 4294967295; isPrintBitm[5325] = 4294967295; isPrintBitm[5326] = 4294967295; 
isPrintBitm[5327] = 4294967295; isPrintBitm[5328] = 4294967295; isPrintBitm[5329] = 4294967295; isPrintBitm[5330] = 4294967295; 
isPrintBitm[5331] = 4294967295; isPrintBitm[5332] = 4294967295; isPrintBitm[5333] = 4294967295; isPrintBitm[5334] = 4294967295; 
isPrintBitm[5335] = 4294967295; isPrintBitm[5336] = 4294967295; isPrintBitm[5337] = 4294967295; isPrintBitm[5338] = 4294967295; 
isPrintBitm[5339] = 4294967295; isPrintBitm[5340] = 4294967295; isPrintBitm[5341] = 4294967295; isPrintBitm[5342] = 4294967295; 
isPrintBitm[5343] = 4294967295; isPrintBitm[5344] = 4294967295; isPrintBitm[5345] = 4294967295; isPrintBitm[5346] = 4294967295; 
isPrintBitm[5347] = 4294967295; isPrintBitm[5348] = 4294967295; isPrintBitm[5349] = 4294967295; isPrintBitm[5350] = 4294967295; 
isPrintBitm[5351] = 4294967295; isPrintBitm[5352] = 4294967295; isPrintBitm[5353] = 4294967295; isPrintBitm[5354] = 4294967295; 
isPrintBitm[5355] = 4294967295; isPrintBitm[5356] = 4294967295; isPrintBitm[5357] = 4294967295; isPrintBitm[5358] = 4294967295; 
isPrintBitm[5359] = 4294967295; isPrintBitm[5360] = 4294967295; isPrintBitm[5361] = 4294967295; isPrintBitm[5362] = 4294967295; 
isPrintBitm[5363] = 4294967295; isPrintBitm[5364] = 4294967295; isPrintBitm[5365] = 4294967295; isPrintBitm[5366] = 4294967295; 
isPrintBitm[5367] = 4294967295; isPrintBitm[5368] = 4294967295; isPrintBitm[5369] = 4294967295; isPrintBitm[5370] = 4294967295; 
isPrintBitm[5371] = 4294967295; isPrintBitm[5372] = 4294967295; isPrintBitm[5373] = 4294967295; isPrintBitm[5374] = 4294967295; 
isPrintBitm[5375] = 4294967295; isPrintBitm[5376] = 4294967295; isPrintBitm[5377] = 4294967295; isPrintBitm[5378] = 4294967295; 
isPrintBitm[5379] = 4294967295; isPrintBitm[5380] = 4294967295; isPrintBitm[5381] = 4294967295; isPrintBitm[5382] = 4294967295; 
isPrintBitm[5383] = 4294967295; isPrintBitm[5384] = 4294967295; isPrintBitm[5385] = 4294967295; isPrintBitm[5386] = 4294967295; 
isPrintBitm[5387] = 4294967295; isPrintBitm[5388] = 4294967295; isPrintBitm[5389] = 4294967295; isPrintBitm[5390] = 4294967295; 
isPrintBitm[5391] = 4294967295; isPrintBitm[5392] = 4294967295; isPrintBitm[5393] = 4294967295; isPrintBitm[5394] = 4294967295; 
isPrintBitm[5395] = 4294967295; isPrintBitm[5396] = 4294967295; isPrintBitm[5397] = 4294967295; isPrintBitm[5398] = 4294967295; 
isPrintBitm[5399] = 4294967295; isPrintBitm[5400] = 4294967295; isPrintBitm[5401] = 4294967295; isPrintBitm[5402] = 4294967295; 
isPrintBitm[5403] = 4294967295; isPrintBitm[5404] = 4294967295; isPrintBitm[5405] = 4294967295; isPrintBitm[5406] = 4294967295; 
isPrintBitm[5407] = 4294967295; isPrintBitm[5408] = 4294967295; isPrintBitm[5409] = 4294967295; isPrintBitm[5410] = 4294967295; 
isPrintBitm[5411] = 4294967295; isPrintBitm[5412] = 4294967295; isPrintBitm[5413] = 4294967295; isPrintBitm[5414] = 4294967295; 
isPrintBitm[5415] = 4294967295; isPrintBitm[5416] = 4294967295; isPrintBitm[5417] = 4294967295; isPrintBitm[5418] = 4294967295; 
isPrintBitm[5419] = 4294967295; isPrintBitm[5420] = 4294967295; isPrintBitm[5421] = 4294967295; isPrintBitm[5422] = 4294967295; 
isPrintBitm[5423] = 4294967295; isPrintBitm[5424] = 4294967295; isPrintBitm[5425] = 4294967295; isPrintBitm[5426] = 4294967295; 
isPrintBitm[5427] = 4294967295; isPrintBitm[5428] = 4294967295; isPrintBitm[5429] = 4294967295; isPrintBitm[5430] = 8388607; 
isPrintBitm[5432] = 4294967295; isPrintBitm[5433] = 4294967295; isPrintBitm[5434] = 4294967295; isPrintBitm[5435] = 4294967295; 
isPrintBitm[5436] = 4294967295; isPrintBitm[5437] = 4294967295; isPrintBitm[5438] = 4294967295; isPrintBitm[5439] = 4294967295; 
isPrintBitm[5440] = 4294967295; isPrintBitm[5441] = 4294967295; isPrintBitm[5442] = 4294967295; isPrintBitm[5443] = 4294967295; 
isPrintBitm[5444] = 4294967295; isPrintBitm[5445] = 4294967295; isPrintBitm[5446] = 4294967295; isPrintBitm[5447] = 4294967295; 
isPrintBitm[5448] = 4294967295; isPrintBitm[5449] = 4294967295; isPrintBitm[5450] = 4294967295; isPrintBitm[5451] = 4294967295; 
isPrintBitm[5452] = 4294967295; isPrintBitm[5453] = 4294967295; isPrintBitm[5454] = 4294967295; isPrintBitm[5455] = 4294967295; 
isPrintBitm[5456] = 4294967295; isPrintBitm[5457] = 4294967295; isPrintBitm[5458] = 4294967295; isPrintBitm[5459] = 4294967295; 
isPrintBitm[5460] = 4294967295; isPrintBitm[5461] = 4294967295; isPrintBitm[5462] = 4294967295; isPrintBitm[5463] = 4294967295; 
isPrintBitm[5464] = 4294967295; isPrintBitm[5465] = 4294967295; isPrintBitm[5466] = 4294967295; isPrintBitm[5467] = 4294967295; 
isPrintBitm[5468] = 4294967295; isPrintBitm[5469] = 4294967295; isPrintBitm[5470] = 4294967295; isPrintBitm[5471] = 4294967295; 
isPrintBitm[5472] = 4294967295; isPrintBitm[5473] = 4294967295; isPrintBitm[5474] = 4294967295; isPrintBitm[5475] = 4294967295; 
isPrintBitm[5476] = 4294967295; isPrintBitm[5477] = 4294967295; isPrintBitm[5478] = 4294967295; isPrintBitm[5479] = 4294967295; 
isPrintBitm[5480] = 4294967295; isPrintBitm[5481] = 4294967295; isPrintBitm[5482] = 4294967295; isPrintBitm[5483] = 4294967295; 
isPrintBitm[5484] = 4294967295; isPrintBitm[5485] = 4294967295; isPrintBitm[5486] = 4294967295; isPrintBitm[5487] = 4294967295; 
isPrintBitm[5488] = 4294967295; isPrintBitm[5489] = 4294967295; isPrintBitm[5490] = 4294967295; isPrintBitm[5491] = 4294967295; 
isPrintBitm[5492] = 4294967295; isPrintBitm[5493] = 4294967295; isPrintBitm[5494] = 4294967295; isPrintBitm[5495] = 4294967295; 
isPrintBitm[5496] = 4294967295; isPrintBitm[5497] = 4294967295; isPrintBitm[5498] = 4294967295; isPrintBitm[5499] = 4294967295; 
isPrintBitm[5500] = 4294967295; isPrintBitm[5501] = 4294967295; isPrintBitm[5502] = 4294967295; isPrintBitm[5503] = 4294967295; 
isPrintBitm[5504] = 4294967295; isPrintBitm[5505] = 4294967295; isPrintBitm[5506] = 4294967295; isPrintBitm[5507] = 4294967295; 
isPrintBitm[5508] = 4294967295; isPrintBitm[5509] = 4294967295; isPrintBitm[5510] = 4294967295; isPrintBitm[5511] = 4294967295; 
isPrintBitm[5512] = 4294967295; isPrintBitm[5513] = 4294967295; isPrintBitm[5514] = 4294967295; isPrintBitm[5515] = 4294967295; 
isPrintBitm[5516] = 4294967295; isPrintBitm[5517] = 4294967295; isPrintBitm[5518] = 4294967295; isPrintBitm[5519] = 4294967295; 
isPrintBitm[5520] = 4294967295; isPrintBitm[5521] = 4294967295; isPrintBitm[5522] = 4294967295; isPrintBitm[5523] = 4294967295; 
isPrintBitm[5524] = 4294967295; isPrintBitm[5525] = 4294967295; isPrintBitm[5526] = 4294967295; isPrintBitm[5527] = 4294967295; 
isPrintBitm[5528] = 4294967295; isPrintBitm[5529] = 4294967295; isPrintBitm[5530] = 4294967295; isPrintBitm[5531] = 4294967295; 
isPrintBitm[5532] = 4294967295; isPrintBitm[5533] = 4294967295; isPrintBitm[5534] = 4294967295; isPrintBitm[5535] = 4294967295; 
isPrintBitm[5536] = 4294967295; isPrintBitm[5537] = 4294967295; isPrintBitm[5538] = 4294967295; isPrintBitm[5539] = 4294967295; 
isPrintBitm[5540] = 4294967295; isPrintBitm[5541] = 4294967295; isPrintBitm[5542] = 4294967295; isPrintBitm[5543] = 4294967295; 
isPrintBitm[5544] = 4294967295; isPrintBitm[5545] = 4294967295; isPrintBitm[5546] = 4294967295; isPrintBitm[5547] = 4294967295; 
isPrintBitm[5548] = 4294967295; isPrintBitm[5549] = 4294967295; isPrintBitm[5550] = 4294967295; isPrintBitm[5551] = 4294967295; 
isPrintBitm[5552] = 4294967295; isPrintBitm[5553] = 4294967295; isPrintBitm[5554] = 4294967295; isPrintBitm[5555] = 4294967295; 
isPrintBitm[5556] = 4294967295; isPrintBitm[5557] = 4294967295; isPrintBitm[5558] = 4294967295; isPrintBitm[5559] = 4294967295; 
isPrintBitm[5560] = 4294967295; isPrintBitm[5561] = 2097151; isPrintBitm[5562] = 4294967295; isPrintBitm[5563] = 4294967295; 
isPrintBitm[5564] = 4294967295; isPrintBitm[5565] = 4294967295; isPrintBitm[5566] = 4294967295; isPrintBitm[5567] = 4294967295; 
isPrintBitm[5568] = 1073741823; isPrintBitm[5569] = 4294967295; isPrintBitm[5570] = 4294967295; isPrintBitm[5571] = 4294967295; 
isPrintBitm[5572] = 4294967295; isPrintBitm[5573] = 4294967295; isPrintBitm[5574] = 4294967295; isPrintBitm[5575] = 4294967295; 
isPrintBitm[5576] = 4294967295; isPrintBitm[5577] = 4294967295; isPrintBitm[5578] = 4294967295; isPrintBitm[5579] = 4294967295; 
isPrintBitm[5580] = 4294967295; isPrintBitm[5581] = 4294967295; isPrintBitm[5582] = 4294967295; isPrintBitm[5583] = 4294967295; 
isPrintBitm[5584] = 4294967295; isPrintBitm[5585] = 4294967295; isPrintBitm[5586] = 4294967295; isPrintBitm[5587] = 4294967295; 
isPrintBitm[5588] = 4294967295; isPrintBitm[5589] = 4294967295; isPrintBitm[5590] = 4294967295; isPrintBitm[5591] = 4294967295; 
isPrintBitm[5592] = 4294967295; isPrintBitm[5593] = 4294967295; isPrintBitm[5594] = 4294967295; isPrintBitm[5595] = 4294967295; 
isPrintBitm[5596] = 4294967295; isPrintBitm[5597] = 4294967295; isPrintBitm[5598] = 4294967295; isPrintBitm[5599] = 4294967295; 
isPrintBitm[5600] = 4294967295; isPrintBitm[5601] = 4294967295; isPrintBitm[5602] = 4294967295; isPrintBitm[5603] = 4294967295; 
isPrintBitm[5604] = 4294967295; isPrintBitm[5605] = 4294967295; isPrintBitm[5606] = 4294967295; isPrintBitm[5607] = 4294967295; 
isPrintBitm[5608] = 4294967295; isPrintBitm[5609] = 4294967295; isPrintBitm[5610] = 4294967295; isPrintBitm[5611] = 4294967295; 
isPrintBitm[5612] = 4294967295; isPrintBitm[5613] = 4294967295; isPrintBitm[5614] = 4294967295; isPrintBitm[5615] = 4294967295; 
isPrintBitm[5616] = 4294967295; isPrintBitm[5617] = 4294967295; isPrintBitm[5618] = 4294967295; isPrintBitm[5619] = 4294967295; 
isPrintBitm[5620] = 4294967295; isPrintBitm[5621] = 4294967295; isPrintBitm[5622] = 4294967295; isPrintBitm[5623] = 4294967295; 
isPrintBitm[5624] = 4294967295; isPrintBitm[5625] = 4294967295; isPrintBitm[5626] = 4294967295; isPrintBitm[5627] = 4294967295; 
isPrintBitm[5628] = 4294967295; isPrintBitm[5629] = 4294967295; isPrintBitm[5630] = 4294967295; isPrintBitm[5631] = 4294967295; 
isPrintBitm[5632] = 4294967295; isPrintBitm[5633] = 4294967295; isPrintBitm[5634] = 4294967295; isPrintBitm[5635] = 4294967295; 
isPrintBitm[5636] = 4294967295; isPrintBitm[5637] = 4294967295; isPrintBitm[5638] = 4294967295; isPrintBitm[5639] = 4294967295; 
isPrintBitm[5640] = 4294967295; isPrintBitm[5641] = 4294967295; isPrintBitm[5642] = 4294967295; isPrintBitm[5643] = 4294967295; 
isPrintBitm[5644] = 4294967295; isPrintBitm[5645] = 4294967295; isPrintBitm[5646] = 4294967295; isPrintBitm[5647] = 4294967295; 
isPrintBitm[5648] = 4294967295; isPrintBitm[5649] = 4294967295; isPrintBitm[5650] = 4294967295; isPrintBitm[5651] = 4294967295; 
isPrintBitm[5652] = 4294967295; isPrintBitm[5653] = 4294967295; isPrintBitm[5654] = 4294967295; isPrintBitm[5655] = 4294967295; 
isPrintBitm[5656] = 4294967295; isPrintBitm[5657] = 4294967295; isPrintBitm[5658] = 4294967295; isPrintBitm[5659] = 4294967295; 
isPrintBitm[5660] = 4294967295; isPrintBitm[5661] = 4294967295; isPrintBitm[5662] = 4294967295; isPrintBitm[5663] = 4294967295; 
isPrintBitm[5664] = 4294967295; isPrintBitm[5665] = 4294967295; isPrintBitm[5666] = 4294967295; isPrintBitm[5667] = 4294967295; 
isPrintBitm[5668] = 4294967295; isPrintBitm[5669] = 4294967295; isPrintBitm[5670] = 4294967295; isPrintBitm[5671] = 4294967295; 
isPrintBitm[5672] = 4294967295; isPrintBitm[5673] = 4294967295; isPrintBitm[5674] = 4294967295; isPrintBitm[5675] = 4294967295; 
isPrintBitm[5676] = 4294967295; isPrintBitm[5677] = 4294967295; isPrintBitm[5678] = 4294967295; isPrintBitm[5679] = 4294967295; 
isPrintBitm[5680] = 4294967295; isPrintBitm[5681] = 4294967295; isPrintBitm[5682] = 4294967295; isPrintBitm[5683] = 4294967295; 
isPrintBitm[5684] = 4294967295; isPrintBitm[5685] = 4294967295; isPrintBitm[5686] = 4294967295; isPrintBitm[5687] = 4294967295; 
isPrintBitm[5688] = 4294967295; isPrintBitm[5689] = 4294967295; isPrintBitm[5690] = 4294967295; isPrintBitm[5691] = 4294967295; 
isPrintBitm[5692] = 4294967295; isPrintBitm[5693] = 4294967295; isPrintBitm[5694] = 4294967295; isPrintBitm[5695] = 4294967295; 
isPrintBitm[5696] = 4294967295; isPrintBitm[5697] = 4294967295; isPrintBitm[5698] = 4294967295; isPrintBitm[5699] = 4294967295; 
isPrintBitm[5700] = 4294967295; isPrintBitm[5701] = 4294967295; isPrintBitm[5702] = 4294967295; isPrintBitm[5703] = 4294967295; 
isPrintBitm[5704] = 4294967295; isPrintBitm[5705] = 4294967295; isPrintBitm[5706] = 4294967295; isPrintBitm[5707] = 4294967295; 
isPrintBitm[5708] = 4294967295; isPrintBitm[5709] = 4294967295; isPrintBitm[5710] = 4294967295; isPrintBitm[5711] = 4294967295; 
isPrintBitm[5712] = 4294967295; isPrintBitm[5713] = 4294967295; isPrintBitm[5714] = 4294967295; isPrintBitm[5715] = 4294967295; 
isPrintBitm[5716] = 4294967295; isPrintBitm[5717] = 4294967295; isPrintBitm[5718] = 4294967295; isPrintBitm[5719] = 4294967295; 
isPrintBitm[5720] = 4294967295; isPrintBitm[5721] = 4294967295; isPrintBitm[5722] = 4294967295; isPrintBitm[5723] = 4294967295; 
isPrintBitm[5724] = 4294967295; isPrintBitm[5725] = 4294967295; isPrintBitm[5726] = 4294967295; isPrintBitm[5727] = 4294967295; 
isPrintBitm[5728] = 4294967295; isPrintBitm[5729] = 4294967295; isPrintBitm[5730] = 4294967295; isPrintBitm[5731] = 4294967295; 
isPrintBitm[5732] = 4294967295; isPrintBitm[5733] = 4294967295; isPrintBitm[5734] = 4294967295; isPrintBitm[5735] = 4294967295; 
isPrintBitm[5736] = 4294967295; isPrintBitm[5737] = 4294967295; isPrintBitm[5738] = 4294967295; isPrintBitm[5739] = 4294967295; 
isPrintBitm[5740] = 4294967295; isPrintBitm[5741] = 4294967295; isPrintBitm[5742] = 4294967295; isPrintBitm[5743] = 4294967295; 
isPrintBitm[5744] = 4294967295; isPrintBitm[5745] = 4294967295; isPrintBitm[5746] = 4294967295; isPrintBitm[5747] = 4294967295; 
isPrintBitm[5748] = 4294967295; isPrintBitm[5749] = 4294901763; isPrintBitm[5750] = 4294967295; isPrintBitm[5751] = 4294967295; 
isPrintBitm[5752] = 4294967295; isPrintBitm[5753] = 4294967295; isPrintBitm[5754] = 4294967295; isPrintBitm[5755] = 4294967295; 
isPrintBitm[5756] = 4294967295; isPrintBitm[5757] = 4294967295; isPrintBitm[5758] = 4294967295; isPrintBitm[5759] = 4294967295; 
isPrintBitm[5760] = 4294967295; isPrintBitm[5761] = 4294967295; isPrintBitm[5762] = 4294967295; isPrintBitm[5763] = 4294967295; 
isPrintBitm[5764] = 4294967295; isPrintBitm[5765] = 4294967295; isPrintBitm[5766] = 4294967295; isPrintBitm[5767] = 4294967295; 
isPrintBitm[5768] = 4294967295; isPrintBitm[5769] = 4294967295; isPrintBitm[5770] = 4294967295; isPrintBitm[5771] = 4294967295; 
isPrintBitm[5772] = 4294967295; isPrintBitm[5773] = 4294967295; isPrintBitm[5774] = 4294967295; isPrintBitm[5775] = 4294967295; 
isPrintBitm[5776] = 4294967295; isPrintBitm[5777] = 4294967295; isPrintBitm[5778] = 4294967295; isPrintBitm[5779] = 4294967295; 
isPrintBitm[5780] = 4294967295; isPrintBitm[5781] = 4294967295; isPrintBitm[5782] = 4294967295; isPrintBitm[5783] = 4294967295; 
isPrintBitm[5784] = 4294967295; isPrintBitm[5785] = 4294967295; isPrintBitm[5786] = 4294967295; isPrintBitm[5787] = 4294967295; 
isPrintBitm[5788] = 4294967295; isPrintBitm[5789] = 4294967295; isPrintBitm[5790] = 4294967295; isPrintBitm[5791] = 4294967295; 
isPrintBitm[5792] = 4294967295; isPrintBitm[5793] = 4294967295; isPrintBitm[5794] = 4294967295; isPrintBitm[5795] = 4294967295; 
isPrintBitm[5796] = 4294967295; isPrintBitm[5797] = 4294967295; isPrintBitm[5798] = 4294967295; isPrintBitm[5799] = 4294967295; 
isPrintBitm[5800] = 4294967295; isPrintBitm[5801] = 4294967295; isPrintBitm[5802] = 4294967295; isPrintBitm[5803] = 4294967295; 
isPrintBitm[5804] = 4294967295; isPrintBitm[5805] = 4294967295; isPrintBitm[5806] = 4294967295; isPrintBitm[5807] = 4294967295; 
isPrintBitm[5808] = 4294967295; isPrintBitm[5809] = 4294967295; isPrintBitm[5810] = 4294967295; isPrintBitm[5811] = 4294967295; 
isPrintBitm[5812] = 4294967295; isPrintBitm[5813] = 4294967295; isPrintBitm[5814] = 4294967295; isPrintBitm[5815] = 4294967295; 
isPrintBitm[5816] = 4294967295; isPrintBitm[5817] = 4294967295; isPrintBitm[5818] = 4294967295; isPrintBitm[5819] = 4294967295; 
isPrintBitm[5820] = 4294967295; isPrintBitm[5821] = 4294967295; isPrintBitm[5822] = 4294967295; isPrintBitm[5823] = 4294967295; 
isPrintBitm[5824] = 4294967295; isPrintBitm[5825] = 4294967295; isPrintBitm[5826] = 4294967295; isPrintBitm[5827] = 4294967295; 
isPrintBitm[5828] = 4294967295; isPrintBitm[5829] = 4294967295; isPrintBitm[5830] = 4294967295; isPrintBitm[5831] = 4294967295; 
isPrintBitm[5832] = 4294967295; isPrintBitm[5833] = 4294967295; isPrintBitm[5834] = 4294967295; isPrintBitm[5835] = 4294967295; 
isPrintBitm[5836] = 4294967295; isPrintBitm[5837] = 4294967295; isPrintBitm[5838] = 4294967295; isPrintBitm[5839] = 4294967295; 
isPrintBitm[5840] = 4294967295; isPrintBitm[5841] = 4294967295; isPrintBitm[5842] = 4294967295; isPrintBitm[5843] = 4294967295; 
isPrintBitm[5844] = 4294967295; isPrintBitm[5845] = 4294967295; isPrintBitm[5846] = 4294967295; isPrintBitm[5847] = 4294967295; 
isPrintBitm[5848] = 4294967295; isPrintBitm[5849] = 4294967295; isPrintBitm[5850] = 4294967295; isPrintBitm[5851] = 4294967295; 
isPrintBitm[5852] = 4294967295; isPrintBitm[5853] = 4294967295; isPrintBitm[5854] = 4294967295; isPrintBitm[5855] = 4294967295; 
isPrintBitm[5856] = 4294967295; isPrintBitm[5857] = 4294967295; isPrintBitm[5858] = 4294967295; isPrintBitm[5859] = 4294967295; 
isPrintBitm[5860] = 4294967295; isPrintBitm[5861] = 4294967295; isPrintBitm[5862] = 4294967295; isPrintBitm[5863] = 4294967295; 
isPrintBitm[5864] = 4294967295; isPrintBitm[5865] = 4294967295; isPrintBitm[5866] = 4294967295; isPrintBitm[5867] = 4294967295; 
isPrintBitm[5868] = 4294967295; isPrintBitm[5869] = 4294967295; isPrintBitm[5870] = 4294967295; isPrintBitm[5871] = 4294967295; 
isPrintBitm[5872] = 4294967295; isPrintBitm[5873] = 4294967295; isPrintBitm[5874] = 4294967295; isPrintBitm[5875] = 4294967295; 
isPrintBitm[5876] = 4294967295; isPrintBitm[5877] = 4294967295; isPrintBitm[5878] = 4294967295; isPrintBitm[5879] = 4294967295; 
isPrintBitm[5880] = 4294967295; isPrintBitm[5881] = 4294967295; isPrintBitm[5882] = 4294967295; isPrintBitm[5883] = 4294967295; 
isPrintBitm[5884] = 4294967295; isPrintBitm[5885] = 4294967295; isPrintBitm[5886] = 4294967295; isPrintBitm[5887] = 4294967295; 
isPrintBitm[5888] = 4294967295; isPrintBitm[5889] = 4294967295; isPrintBitm[5890] = 4294967295; isPrintBitm[5891] = 4294967295; 
isPrintBitm[5892] = 4294967295; isPrintBitm[5893] = 4294967295; isPrintBitm[5894] = 4294967295; isPrintBitm[5895] = 4294967295; 
isPrintBitm[5896] = 4294967295; isPrintBitm[5897] = 4294967295; isPrintBitm[5898] = 4294967295; isPrintBitm[5899] = 4294967295; 
isPrintBitm[5900] = 4294967295; isPrintBitm[5901] = 4294967295; isPrintBitm[5902] = 4294967295; isPrintBitm[5903] = 4294967295; 
isPrintBitm[5904] = 4294967295; isPrintBitm[5905] = 4294967295; isPrintBitm[5906] = 4294967295; isPrintBitm[5907] = 4294967295; 
isPrintBitm[5908] = 4294967295; isPrintBitm[5909] = 4294967295; isPrintBitm[5910] = 4294967295; isPrintBitm[5911] = 4294967295; 
isPrintBitm[5912] = 4294967295; isPrintBitm[5913] = 4294967295; isPrintBitm[5914] = 4294967295; isPrintBitm[5915] = 4294967295; 
isPrintBitm[5916] = 4294967295; isPrintBitm[5917] = 4294967295; isPrintBitm[5918] = 4294967295; isPrintBitm[5919] = 4294967295; 
isPrintBitm[5920] = 4294967295; isPrintBitm[5921] = 4294967295; isPrintBitm[5922] = 4294967295; isPrintBitm[5923] = 4294967295; 
isPrintBitm[5924] = 4294967295; isPrintBitm[5925] = 4294967295; isPrintBitm[5926] = 4294967295; isPrintBitm[5927] = 4294967295; 
isPrintBitm[5928] = 4294967295; isPrintBitm[5929] = 4294967295; isPrintBitm[5930] = 4294967295; isPrintBitm[5931] = 4294967295; 
isPrintBitm[5932] = 4294967295; isPrintBitm[5933] = 4294967295; isPrintBitm[5934] = 4294967295; isPrintBitm[5935] = 4294967295; 
isPrintBitm[5936] = 4294967295; isPrintBitm[5937] = 4294967295; isPrintBitm[5938] = 4294967295; isPrintBitm[5939] = 4294967295; 
isPrintBitm[5940] = 4294967295; isPrintBitm[5941] = 4294967295; isPrintBitm[5942] = 4294967295; isPrintBitm[5943] = 4294967295; 
isPrintBitm[5944] = 4294967295; isPrintBitm[5945] = 4294967295; isPrintBitm[5946] = 4294967295; isPrintBitm[5947] = 4294967295; 
isPrintBitm[5948] = 4294967295; isPrintBitm[5949] = 4294967295; isPrintBitm[5950] = 4294967295; isPrintBitm[5951] = 4294967295; 
isPrintBitm[5952] = 4294967295; isPrintBitm[5953] = 4294967295; isPrintBitm[5954] = 4294967295; isPrintBitm[5955] = 4294967295; 
isPrintBitm[5956] = 4294967295; isPrintBitm[5957] = 4294967295; isPrintBitm[5958] = 4294967295; isPrintBitm[5959] = 4294967295; 
isPrintBitm[5960] = 4294967295; isPrintBitm[5961] = 4294967295; isPrintBitm[5962] = 4294967295; isPrintBitm[5963] = 4294967295; 
isPrintBitm[5964] = 4294967295; isPrintBitm[5965] = 4294967295; isPrintBitm[5966] = 4294967295; isPrintBitm[5967] = 4294967295; 
isPrintBitm[5968] = 4294967295; isPrintBitm[5969] = 4294967295; isPrintBitm[5970] = 4294967295; isPrintBitm[5971] = 4294967295; 
isPrintBitm[5972] = 4294967295; isPrintBitm[5973] = 4294967295; isPrintBitm[5974] = 4294967295; isPrintBitm[5975] = 4294967295; 
isPrintBitm[5976] = 4294967295; isPrintBitm[5977] = 4294967295; isPrintBitm[5978] = 4294967295; isPrintBitm[5979] = 4294967295; 
isPrintBitm[5980] = 4294967295; isPrintBitm[5981] = 4294967295; isPrintBitm[5982] = 4294967295; isPrintBitm[5983] = 1; 
isPrintBitm[6080] = 4294967295; isPrintBitm[6081] = 4294967295; isPrintBitm[6082] = 4294967295; isPrintBitm[6083] = 4294967295; 
isPrintBitm[6084] = 4294967295; isPrintBitm[6085] = 4294967295; isPrintBitm[6086] = 4294967295; isPrintBitm[6087] = 4294967295; 
isPrintBitm[6088] = 4294967295; isPrintBitm[6089] = 4294967295; isPrintBitm[6090] = 4294967295; isPrintBitm[6091] = 4294967295; 
isPrintBitm[6092] = 4294967295; isPrintBitm[6093] = 4294967295; isPrintBitm[6094] = 4294967295; isPrintBitm[6095] = 4294967295; 
isPrintBitm[6096] = 1073741823; 

function isPrint(c) {
	var cp = ord(c);
	var idx = Math.floor(cp / 32);
	var byt = isPrintBitm[idx];
	if (byt) {
		var mask = Math.pow(2, cp - idx * 32);
		return (byt & mask) != 0;
	}
	return false;
}

function toLower(c) {
    var cp = ord(c);
    
    if (cp == 304)
	return chr(105);
    else if (cp >= 7312 && cp <= 7354)
	return c;
    else if (cp >= 7357 && cp <= 7359)
	return c;
    else if (cp == 42936)
	return c;
    else if (cp >= 93760 && cp <= 93791)
	return c;
    return c.toLowerCase();
}

function toUpper(c) {
    var cp = ord(c);
    if (cp == 223)
	return c;
    else if (cp == 329)
	return c;
    else if (cp == 496)
	return c;
    else if (cp == 912)
	return c;
    else if (cp == 944)
	return c;
    else if (cp == 1415)
	return c;
    else if (cp >= 4304 && cp <= 4346)
	return c;
    else if (cp >= 4349 && cp <= 4351)
	return c;
    else if (cp >= 7830 && cp <= 7834)
	return c;
    else if (cp == 8016)
	return c;
    else if (cp == 8018)
	return c;
    else if (cp == 8020)
	return c;
    else if (cp == 8022)
	return c;
    else if (cp >= 8064 && cp <= 8071)
	return chr(cp + 8)
    else if (cp >= 8072 && cp <= 8079)
	return c;
    else if (cp >= 8080 && cp <= 8087)
	return chr(cp + 8);
    else if (cp >= 8088 && cp <= 8095)
	return c;
    else if (cp >= 8096 && cp <= 8103)
	return chr(cp + 8)
    else if (cp >= 8104 && cp <= 8111)
	return c;
    else if (cp == 8114)
	return c;
    else if (cp == 8115)
	return chr(8124);
    else if (cp == 8116)
	return c;
    else if (cp == 8118)
	return c;
    else if (cp == 8119)
	return c;
    else if (cp == 8124)
	return c;
    else if (cp == 8130)
	return c;
    else if (cp == 8131)
	return chr(8140);
    else if (cp == 8132)
	return c;
    else if (cp == 8134)
	return c;
    else if (cp == 8135)
	return c;
    else if (cp == 8140)
	return c;
    else if (cp == 8146)
	return c;
    else if (cp == 8147)
	return c;
    else if (cp == 8150)
	return c;
    else if (cp == 8151)
	return c;
    else if (cp >= 8162 && cp <= 8164)
	return c;
    else if (cp == 8166)
	return c;
    else if (cp == 8167)
	return c;
    else if (cp == 8178)
	return c;
    else if (cp == 8179)
	return chr(8188);
    else if (cp == 8180)
	return c;
    else if (cp == 8182)
	return c;
    else if (cp == 8183)
	return c;
    else if (cp == 8188)
	return c;
    else if (cp == 42937)
	return c;
    else if (cp >= 64256 && cp <= 64262)
	return c;
    else if (cp >= 64275 && cp <= 64279)
	return c;
    else if (cp >= 93792 && cp <= 93823)
	return c;
    else
	return c.toUpperCase();
}

// Lists

function cons(v, ls) {
    return { next : ls, data : v };
}
function rev(ls) {
    var acc = null;
    for (; ls; ls = ls.next)
	acc = cons(ls.data, acc);
    return acc;
}
function concat(ls1, ls2) {
    var acc = ls2;
    ls1 = rev(ls1);
    for (; ls1; ls1 = ls1.next)
        acc = cons(ls1.data, acc);
    return acc;
}
function member(x, ls) {
    for (; ls; ls = ls.next)
        if (ls.data == x)
            return true;
    return false;
}
function remove(x, ls) {
    var acc = null;

    for (; ls; ls = ls.next)
        if (ls.data == x)
            return concat(acc, ls.next);
    else
        acc = cons(ls.data, acc);

    return ls;
}
function union(ls1, ls2) {
    var acc = ls2;

    for (; ls1; ls1 = ls1.next)
        if (!member(ls1.data, ls2))
            acc = cons(ls1.data, acc);

    return acc;
}
function length(ls) {
    var acc = 0;

    for (; ls; ls = ls.next)
        ++acc;

    return acc;
}


// Floats

function float(n) {
    return n;
}

function trunc(n) {
    return ~~n;
}

function ceil(n) {
    return Math.ceil(n);
}

function round(n) {
    return Math.round(n);
}

function pow(n, m) {
    return Math.pow(n, m);
}

function sqrt(n){
    return Math.sqrt(n);
}

function sin(n){
    return Math.sin(n);
}

function cos(n){
    return Math.cos(n);
}

function log(n){
    return Math.log(n);
}

function exp(n){
    return Math.exp(n);
}

function asin(n){
    return Math.asin(n);
}
function acos(n){
    return Math.acos(n);
}

function atan(n){
    return Math.atan(n);
}

function atan2(n, m){
    return Math.atan2(n, m);
}

function floor(n){
    return Math.floor(n);
}

function abs(n){
    return Math.abs(n);
}

// Time, represented as counts of microseconds since the epoch

var time_format = "%c";

function showTime(tm) {
    return strftime(time_format, tm);
}

function showTimeHtml(tm) {
    return eh(showTime(tm));
}

function now() {
    return (new Date()).getTime() * 1000;
}

function diffInSeconds(tm1, tm2) {
    return Math.round((tm2 - tm1) / 1000000);
}

function diffInMilliseconds(tm1, tm2) {
    return Math.round((tm2 - tm1) / 1000);
}

function toSeconds(tm) {
    return Math.round(tm / 1000000);
}

function toMilliseconds(tm) {
    return Math.round(tm / 1000);
}

function fromMilliseconds(tm) {
    return tm * 1000;
}

function addSeconds(tm, n) {
    return tm + n * 1000000;
}

function stringToTime_error(string) {
    var t = Date.parse(string);
    if (isNaN(t))
        er("Invalid date string: " + string);
    else
        return t * 1000;
}

function stringToTime(string) {
    try {
        var t = Date.parse(string);
        if (isNaN(t))
            return null;
        else
            return t * 1000;
    } catch (e) {
        return null;
    }
}

/*
  strftime() implementation from:
  YUI 3.4.1 (build 4118)
  Copyright 2011 Yahoo! Inc. All rights reserved.
  Licensed under the BSD License.
  http://yuilibrary.com/license/
*/

var xPad=function (x, pad, r)
{
    if(typeof r === "undefined")
    {
	r=10;
    }
    pad = pad.toString();
    for( ; parseInt(x, 10)<r && r>1; r/=10) {
	x = pad + x;
    }
    return x.toString();
};

var YDateEn = {
    a: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    A: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    b: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    B: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    c: "%a %d %b %Y %T %Z",
    p: ["AM", "PM"],
    P: ["am", "pm"],
    r: "%I:%M:%S %p",
    x: "%d/%m/%y",
    X: "%T"
};

var Dt = {
    formats: {
	a: function (d, l) { return l.a[d.getDay()]; },
	A: function (d, l) { return l.A[d.getDay()]; },
	b: function (d, l) { return l.b[d.getMonth()]; },
	B: function (d, l) { return l.B[d.getMonth()]; },
	C: function (d) { return xPad(parseInt(d.getFullYear()/100, 10), 0); },
	d: ["getDate", "0"],
	e: ["getDate", " "],
	g: function (d) { return xPad(parseInt(Dt.formats.G(d)%100, 10), 0); },
	G: function (d) {
	    var y = d.getFullYear();
	    var V = parseInt(Dt.formats.V(d), 10);
	    var W = parseInt(Dt.formats.W(d), 10);

	    if(W > V) {
		y++;
	    } else if(W===0 && V>=52) {
		y--;
	    }

	    return y;
	},
	H: ["getHours", "0"],
	I: function (d) { var I=d.getHours()%12; return xPad(I===0?12:I, 0); },
	j: function (d) {
	    var gmd_1 = new Date("" + d.getFullYear() + "/1/1 GMT");
	    var gmdate = new Date("" + d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate() + " GMT");
	    var ms = gmdate - gmd_1;
	    var doy = parseInt(ms/60000/60/24, 10)+1;
	    return xPad(doy, 0, 100);
	},
	k: ["getHours", " "],
	l: function (d) { var I=d.getHours()%12; return xPad(I===0?12:I, " "); },
	m: function (d) { return xPad(d.getMonth()+1, 0); },
	M: ["getMinutes", "0"],
	p: function (d, l) { return l.p[d.getHours() >= 12 ? 1 : 0 ]; },
	P: function (d, l) { return l.P[d.getHours() >= 12 ? 1 : 0 ]; },
	s: function (d, l) { return parseInt(d.getTime()/1000, 10); },
	S: ["getSeconds", "0"],
	u: function (d) { var dow = d.getDay(); return dow===0?7:dow; },
	U: function (d) {
	    var doy = parseInt(Dt.formats.j(d), 10);
	    var rdow = 6-d.getDay();
	    var woy = parseInt((doy+rdow)/7, 10);
	    return xPad(woy, 0);
	},
	V: function (d) {
	    var woy = parseInt(Dt.formats.W(d), 10);
	    var dow1_1 = (new Date("" + d.getFullYear() + "/1/1")).getDay();
	    var idow = woy + (dow1_1 > 4 || dow1_1 <= 1 ? 0 : 1);
	    if(idow === 53 && (new Date("" + d.getFullYear() + "/12/31")).getDay() < 4)
	    {
		idow = 1;
	    }
	    else if(idow === 0)
	    {
		idow = Dt.formats.V(new Date("" + (d.getFullYear()-1) + "/12/31"));
	    }

	    return xPad(idow, 0);
	},
	w: "getDay",
	W: function (d) {
	    var doy = parseInt(Dt.formats.j(d), 10);
	    var rdow = 7-Dt.formats.u(d);
	    var woy = parseInt((doy+rdow)/7, 10);
	    return xPad(woy, 0, 10);
	},
	y: function (d) { return xPad(d.getFullYear()%100, 0); },
	Y: "getFullYear",
	z: function (d) {
	    var o = d.getTimezoneOffset();
	    var H = xPad(parseInt(Math.abs(o/60), 10), 0);
	    var M = xPad(Math.abs(o%60), 0);
	    return (o>0?"-":"+") + H + M;
	},
	Z: function (d) {
	    var tz = d.toString().replace(/^.*:\d\d( GMT[+-]\d+)? \(?([A-Za-z ]+)\)?\d*$/, "$2").replace(/[a-z ]/g, "");
	    if(tz.length > 4) {
		tz = Dt.formats.z(d);
	    }
	    return tz;
	},
	"%": function (d) { return "%"; }
    },

    aggregates: {
	c: "locale",
	D: "%m/%d/%y",
	F: "%Y-%m-%d",
	h: "%b",
	n: "\n",
	r: "%I:%M:%S %p",
	R: "%H:%M",
	t: "\t",
	T: "%H:%M:%S",
	x: "locale",
	X: "locale"
    },

    format : function (oDate, format) {
	var replace_aggs = function (m0, m1) {
	    var f = Dt.aggregates[m1];
	    return (f === "locale" ? YDateEn[m1] : f);
	};

	var replace_formats = function (m0, m1) {
	    var f = Dt.formats[m1];
	    switch(typeof f) {
	    case "string":
		return oDate[f]();
	    case "function":
		return f.call(oDate, oDate, YDateEn);
	    case "array":
            case "object":
		if(typeof(f[0]) === "string")
		    return xPad(oDate[f[0]](), f[1]);
	    default:
		return m1;
	    }
	};

	while(format.match(/%[cDFhnrRtTxX]/)) {
	    format = format.replace(/%([cDFhnrRtTxX])/g, replace_aggs);
	}

	var str = format.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g, replace_formats);

	replace_aggs = replace_formats = undefined;

	return str;
    }
};

// End of YUI code

function strftime(fmt, thisTime)
{
    var thisDate = new Date();
    thisDate.setTime(Math.floor(thisTime / 1000));
    return Dt.format(thisDate, fmt);
};

function fromDatetime(year, month, date, hour, minute, second) {
  return (new Date(year, month, date, hour, minute, second)).getTime() * 1000;
};

function datetimeYear(t) {
  return (new Date(t / 1000)).getYear() + 1900;
};

function datetimeMonth(t) {
  return (new Date(t / 1000)).getMonth();
};

function datetimeDay(t) {
  return (new Date(t / 1000)).getDate();
};

function datetimeHour(t) {
  return (new Date(t / 1000)).getHours();
};

function datetimeMinute(t) {
  return (new Date(t / 1000)).getMinutes();
};

function datetimeSecond(t) {
  return (new Date(t / 1000)).getSeconds();
};

function datetimeDayOfWeek(t) {
  return (new Date(t / 1000)).getDay();
};


// Error handling

function uw_debug(msg) {
    try {
        console.debug(msg);
    } catch (e) {
        alert("DEBUG: " + msg);
    }

    return 0;
}

function whine(msg) {
    alert(msg);
    throw msg;
}

function pf(loc) {
    throw ("Pattern match failure (" + loc + ")");
}

var lameDuck = false;

function runHandlers(kind, ls, arg) {
    if (!lameDuck) {
        if (ls == null)
            alert(kind + ": " + arg);
        for (; ls; ls = ls.next)
            try {
                exec({c:"a", f:{c:"a", f:ls.data, x:{c:"c", v:arg}}, x:{c:"c", v:null}});
            } catch (v) { }
    }
}

var errorHandlers = null;

function flift0(v) {
    return {c:"c", v:v};
}

function onError(f) {
    errorHandlers = cons(flift0(f), errorHandlers);
}

function er(s) {
    runHandlers("Error", errorHandlers, s);
    throw {uw_error: s};
}

var failHandlers = null;

function onFail(f) {
    failHandlers = cons(flift0(f), failHandlers);
}

function doExn(v) {
    if (v == null || v.uw_error == null) {
        var s = (v == null ? "null" : v.message ? v.message : v.toString());
        if (v != null && v.fileName && v.lineNumber)
            s += " (" + v.fileName + ":" + v.lineNumber + ")";
        runHandlers("Fail", failHandlers, s);
    }
}

var disconnectHandlers = null;

function flift(f) {
    return {c: "c", v:{env:cons(f,null), body:{c:"v", n:1}}};
}

function onDisconnect(f) {
    disconnectHandlers = cons(flift(f), disconnectHandlers);
}

function discon() {
    runHandlers("Disconnect", disconnectHandlers, null);
}

var connectHandlers = null;

function onConnectFail(f) {
    connectHandlers = cons(flift(f), connectHandlers);
}

function conn(msg) {
    var rx = /(.*)<body>((.|\n|\r)*)<\/body>(.*)/g;
    var arr = rx.exec(msg);
    msg = (arr && arr.length >= 3) ? arr[2] : msg;
    runHandlers("RPC failure", connectHandlers, msg);
}

var serverHandlers = null;

function onServerError(f) {
    serverHandlers = cons(flift0(f), serverHandlers);
}

function servErr(s) {
    window.setTimeout(function () { runHandlers("Server", serverHandlers, s); }, 0);
}

// Key and mouse events

var uw_event = null;

function uw_getEvent() {
    return window.event ? window.event : uw_event;
}

function firstGood(x, y) {
    if (x == undefined || x == 0)
        return y;
    else
        return x;
}

function uw_mouseEvent() {
    var ev = uw_getEvent();

    return {_ScreenX : firstGood(ev.screenX, 0),
            _ScreenY : firstGood(ev.screenY, 0),
            _ClientX : firstGood(ev.clientX, 0),
            _ClientY : firstGood(ev.clientY, 0),
            _OffsetX : firstGood(ev.offsetX, 0),
            _OffsetY : firstGood(ev.offsetY, 0),
            _CtrlKey : firstGood(ev.ctrlKey, false),
            _ShiftKey : firstGood(ev.shiftKey, false),
            _AltKey : firstGood(ev.altKey, false),
            _MetaKey : firstGood(ev.metaKey, false),
            _Button : ev.button == 2 ? "Right" : ev.button == 1 ? "Middle" : "Left"};
}

function uw_keyEvent() {
    var ev = uw_getEvent();

    return {_KeyCode : firstGood(ev.keyCode, ev.which),
            _CtrlKey : firstGood(ev.ctrlKey, false),
            _ShiftKey : firstGood(ev.shiftKey, false),
            _AltKey : firstGood(ev.altKey, false),
            _MetaKey : firstGood(ev.metaKey, false)};
}



// Document events

function uw_handler(name, f) {
    var old = document[name];
    if (old == undefined)
        document[name] = function(event) { uw_event = event; execF(execF(f, uw_mouseEvent())); };
    else
        document[name] = function(event) { uw_event = event; old(); execF(execF(f, uw_mouseEvent())); };
}

function uw_onClick(f) {
    uw_handler("onclick", f);
}

function uw_onContextmenu(f) {
    uw_handler("oncontextmenu", f);
}

function uw_onDblclick(f) {
    uw_handler("ondblclick", f);
}

function uw_onMousedown(f) {
    uw_handler("onmousedown", f);
}

function uw_onMouseenter(f) {
    uw_handler("onmouseenter", f);
}

function uw_onMouseleave(f) {
    uw_handler("onmouseleave", f);
}

function uw_onMousemove(f) {
    uw_handler("onmousemove", f);
}

function uw_onMouseout(f) {
    uw_handler("onmouseout", f);
}

function uw_onMouseover(f) {
    uw_handler("onmouseover", f);
}

function uw_onMouseup(f) {
    uw_handler("onmouseup", f);
}

function uw_keyHandler(name, f) {
    var old = document[name];
    if (old == undefined)
        document[name] = function(event) { uw_event = event; execF(execF(f, uw_keyEvent())); };
    else
        document[name] = function(event) { uw_event = event; old(); execF(execF(f, uw_keyEvent())); };
}

function uw_onKeydown(f) {
    uw_keyHandler("onkeydown", f);
}

function uw_onKeypress(f) {
    uw_keyHandler("onkeypress", f);
}

function uw_onKeyup(f) {
    uw_keyHandler("onkeyup", f);
}

// Cancelling of further event processing

function uw_preventDefault() {
    var e = window.event ? window.event : uw_event;
    e.returnValue = false;
    if (e.preventDefault) e.preventDefault();
}

function uw_stopPropagation() {
    var e = window.event ? window.event : uw_event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
}

// Embedding closures in XML strings

function cs(f) {
    return {closure: f};
}

function isWeird(v) {
    return v.closure != null || v.cat1 != null;
}

function cat(s1, s2) {
    if (isWeird(s1) || isWeird(s2))
        return {cat1: s1, cat2: s2};
    else
        return s1 + s2;
}

var closures = [];
var freeClosures = null;

function newClosure(f) {
    var n;
    if (freeClosures == null) {
        n = closures.length;
    } else {
        n = freeClosures.data;
        freeClosures = freeClosures.next;
    }
    closures[n] = f;
    return n;
}

function freeClosure(n) {
    closures[n] = null;
    freeClosures = cons(n, freeClosures);
}

function cr(n) {
    return closures[n];
}

function flattenAcc(a, cls, trs) {
    while (trs) {
        var tr = trs.data;
        trs = trs.next;

        if (tr.cat1 != null) {
            trs = cons(tr.cat1, cons(tr.cat2, trs));
        } else if (tr.closure != null) {
            var cl = newClosure(tr.closure);
            cls.v = cons(cl, cls.v);
            a.push("cr(", cl.toString(), ")");
        } else
            a.push(tr);
    }
}

function flatten(cls, tr) {
    var a = [];
    flattenAcc(a, cls, cons(tr, null));
    return a.join("");
}

function flattenLocal(s) {
    var cls = {v : null};
    var r = flatten(cls, s);
    for (cl = cls.v; cl != null; cl = cl.next)
        freeClosure(cl.data);
    return r;
}


// Dynamic tree management

function populate(node) {
    if (node.dead) return;

    var s = node.signal;
    var oldSources = node.sources;
    try {
        var sr = execF(s, null);
        var newSources = sr._sources;

        for (var sp = oldSources; sp; sp = sp.next)
            if (!member(sp.data, newSources))
                sp.data.dyns = remove(node, sp.data.dyns);

        for (var sp = newSources; sp; sp = sp.next)
            if (!member(sp.data, oldSources))
                sp.data.dyns = cons(node, sp.data.dyns);

        node.sources = newSources;
        node.recreate(sr._data);
    } catch (v) {
        doExn(v);
    }
}

function sc(v) {
    return {data : v, dyns : null};
}
function sv(s, v) {
    if (s.data != v) {
        s.data = v;

        for (var ls = s.dyns; ls; ls = ls.next)
            populate(ls.data);
    }
}
function sg(s) {
    return s.data;
}

function ss(s) {
    return {env:cons(s, null), body:{c:"r", l:
            cons({n:"sources", v:{c:"c", v:cons(s, null)}},
                 cons({n:"data", v:{c:"f", f:sg, a:cons({c:"v", n:1}, null)}}, null))}};
}
function sr(v) {
    return {env:null, body:{c:"c", v:{_sources : null, _data : v}}};
}
function sb(x,y) {
    return {env:cons(y,cons(x,null)),
            body:{c:"=",
                e1:{c:"a", f:{c:"v", n:2}, x:{c:"c", v:null}},
                e2:{c:"=",
                    e1:{c:"a",
                        f:{c:"a", f:{c:"v", n:2}, x:{c:".", r:{c:"v", n:0}, f:"data"}},
                        x:{c:"c", v:null}},
                    e2:{c:"r", l:cons(
                                      {n:"sources", v:{c:"f", f:union, a:cons({c:".", r:{c:"v", n:1}, f:"sources"},
                                                                              cons({c:".", r:{c:"v", n:0}, f:"sources"}, null))}},
                                      cons({n:"data", v:{c:".", r:{c:"v", n:0}, f:"data"}}, null))}}}};
}
function scur(s) {
    return execF(s, null)._data;
}

function lastParent() {
    var pos = document.body;

    while (pos.lastChild && pos.lastChild.nodeType == 1)
        pos = pos.lastChild;

    pos = pos.parentNode;

    return pos;
}

var thisScript = null;

function addNode(node) {
    if (thisScript) {
        if (thisScript.parentNode)
            thisScript.parentNode.replaceChild(node, thisScript);
    } else
        lastParent().appendChild(node);
}

function runScripts(node) {
    if (node.tagName == "SCRIPT") {
        var savedScript = thisScript;
        thisScript = node;

        try {
            eval(thisScript.text);
        } catch (v) {
            doExn(v);
        }
        if (thisScript.parentNode)
            thisScript.parentNode.removeChild(thisScript);

        thisScript = savedScript;
    } else if (node.getElementsByTagName) {
        var savedScript = thisScript;

        var scripts = node.getElementsByTagName("script"), scriptsCopy = [];
        var len = scripts.length;
        for (var i = 0; i < len; ++i)
            scriptsCopy[i] = scripts[i];
        for (var i = 0; i < len; ++i) {
            thisScript = scriptsCopy[i];

            try {
                eval(thisScript.text);
            } catch (v) {
                doExn(v);
            }
            if (thisScript.parentNode)
                thisScript.parentNode.removeChild(thisScript);
        }

        thisScript = savedScript;
    }
}


// Dynamic tree entry points

function killScript(scr) {
    scr.dead = true;
    for (var ls = scr.sources; ls; ls = ls.next)
        ls.data.dyns = remove(scr, ls.data.dyns);
    for (var ls = scr.closures; ls; ls = ls.next)
        freeClosure(ls.data);
}

// Sometimes we wind up with tables that contain <script>s outside the single <tbody>.
// To avoid dealing with that case, we normalize by moving <script>s into <tbody>.
function normalizeTable(table) {
    var orig = table;

    var script, next;

    while (table && table.tagName != "TABLE")
        table = table.parentNode;

    for (var tbody = table.firstChild; tbody; tbody = tbody.nextSibling) {
        if (tbody.tagName == "TBODY") {
            var firstChild = tbody.firstChild;

            for (script = table.firstChild; script && script != tbody; script = next) {
                next = script.nextSibling;

                if (script.tagName === "SCRIPT") {
                    if (firstChild)
                        tbody.insertBefore(script, firstChild);
                    else
                        tbody.appendChild(script);
                }
            }

            return;
        }
    }

    var tbody = document.createElement("tbody");
    for (script = table.firstChild; script; script = next) {
        next = script.nextSibling;

        tbody.appendChild(script);
    }
    table.appendChild(tbody);
}

var suspendScripts = false;

function dyn(pnode, s) {
    if (suspendScripts)
        return;

    var x = document.createElement("script");
    x.dead = false;
    x.signal = s;
    x.sources = null;
    x.closures = null;

    var firstChild = null;

    x.recreate = function(v) {
        for (var ls = x.closures; ls; ls = ls.next)
            freeClosure(ls.data);

        var next;
        for (var child = firstChild; child && child != x; child = next) {
            next = child.nextSibling;

            killScript(child);
            if (child.getElementsByTagName) {
                var arr = child.getElementsByTagName("script");
                for (var i = 0; i < arr.length; ++i)
                    killScript(arr[i]);
            }

            if (child.parentNode)
                child.parentNode.removeChild(child);
        }

        var cls = {v : null};
        var html = flatten(cls, v);
        if (pnode != "table" && pnode != "tr")
            html = dynPrefix + html;
        x.closures = cls.v;

        if (pnode == "table") {
            normalizeTable(x.parentNode);

            var dummy = document.createElement("body");
            suspendScripts = true;
            try {
                dummy.innerHTML = "<table>" + html + "</table>";
            } catch (e) {
                suspendScripts = false;
                throw e;
            }

            var table = x.parentNode;

            if (table) {
                firstChild = null;
                var tbody;

                var arr = dummy.getElementsByTagName("tbody");

                var tbody;
                if (arr.length > 0 && arr[0].parentNode == dummy.firstChild) {
                    tbody = arr[0];
                    var next;
                    for (var node = dummy.firstChild.firstChild; node; node = next) {
                        next = node.nextSibling;

                        if (node.tagName != "TBODY")
                            tbody.appendChild(node);
                    }
                } else
                    tbody = dummy.firstChild;

                var next;
                firstChild = document.createElement("script");
                table.insertBefore(firstChild, x);
                for (var node = tbody.firstChild; node; node = next) {
                    next = node.nextSibling;
                    table.insertBefore(node, x);
                    suspendScripts = false;
                    runScripts(node);
                    suspendScripts = true;
                }
            }

            suspendScripts = false;
        } else if (pnode == "tr") {
            var dummy = document.createElement("body");
            suspendScripts = true;
            try {
                dummy.innerHTML = "<table><tr>" + html + "</tr></table>";
            } catch (e) {
                suspendScripts = false;
                throw e;
            }

            var table = x.parentNode;

            if (table) {
                var arr = dummy.getElementsByTagName("tr");
                firstChild = null;
                var tr;
                if (arr.length > 0 && table != null)
                    tr = arr[0];
                else
                    tr = dummy.firstChild;

                var next;
                firstChild = document.createElement("script");
                table.insertBefore(firstChild, x);
                for (var node = tr.firstChild; node; node = next) {
                    next = node.nextSibling;
                    table.insertBefore(node, x);
                    suspendScripts = false;
                    runScripts(node);
                    suspendScripts = true;
                }
            };

            suspendScripts = false;
        } else {
            firstChild = document.createElement("span");

            suspendScripts = true;
            try {
                firstChild.innerHTML = html;
                if (x.parentNode)
                    x.parentNode.insertBefore(firstChild, x);
            } catch (e) {
                suspendScripts = false;
                throw e;
            }
            suspendScripts = false;
            runScripts(firstChild);
        }
    };

    addNode(x);
    populate(x);
}

function setInnerHTML(node, html) {
    var x;

    if (node.previousSibling && node.previousSibling.closures != undefined) {
        x = node.previousSibling;

        for (var ls = x.closures; ls; ls = ls.next)
            freeClosure(ls.data);

        if (node.getElementsByTagName) {
            var arr = node.getElementsByTagName("script");
            for (var i = 0; i < arr.length; ++i)
                killScript(arr[i]);
        }
    } else {
        x = document.createElement("script");
        x.dead = false;
        x.sources = null;

        if (node.parentNode)
            node.parentNode.insertBefore(x, node);
        else
            whine("setInnerHTML: node is not already in the DOM tree");
    }

    var cls = {v : null};
    var html = flatten(cls, html);
    x.closures = cls.v;
    suspendScripts = true;
    node.innerHTML = html;
    suspendScripts = false;
    runScripts(node);
}

var maySuspend = true;

function active(s) {
    if (suspendScripts)
        return;

    var ms = maySuspend;
    maySuspend = false;
    try {
        var html = execF(s);
    } catch (e) {
        maySuspend = ms;
        throw e;
    }
    maySuspend = ms;
    if (html != "") {
        var span = document.createElement("span");
        addNode(span);
        setInnerHTML(span, html);
    }
}

function input(x, s, recreate, type, name) {
    if (name) x.name = name;
    if (type) x.type = type;
    addNode(x);

    var sc = document.createElement("script");
    sc.dead = false;
    sc.signal = ss(s);
    sc.sources = null;
    sc.recreate = recreate(x);

    if (x.parentNode)
        x.parentNode.insertBefore(sc, x);

    populate(sc);

    return x;
}

function inpt(type, s, name) {
    if (suspendScripts)
        return;

    var x = input(document.createElement("input"), s,
                  function(x) { return function(v) { if (x.value != v) x.value = v; }; }, type, name);
    x.value = s.data;
    x.onkeyup = x.oninput = x.onchange = x.onpropertychange = function() { sv(s, x.value) };

    return x;
}
function inpt_float(type, s, name) {
    if (suspendScripts)
        return;

    var filterFloat = function(value) {
	if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
	    .test(value))
	    return Number(value);
	return null;
    }
    var x = input(document.createElement("input"), s, function(x) { return function(v) { if (x.value != v) x.value = v; }; }, type, name);
    x.value = s.data;
    x.onkeyup = x.oninput = x.onchange = x.onpropertychange = function() { sv(s, filterFloat(x.value)) };

    return x;
}


function inp(s, name) {
    return inpt("text", s, name);
}

function password(s, name) {
    return inpt("password", s, name);
}

function email(s, name) {
    return inpt("email", s, name);
}

function search(s, name) {
    return inpt("search", s, name);
}

function url(s, name) {
    return inpt("url", s, name);
}

function tel(s, name) {
    return inpt("tel", s, name);
}

function color(s, name) {
    return inpt("color", s, name);
}

function number(s, name) {
    return inpt_float("number", s, name);
}

function range(s, name) {
    return inpt_float("range", s, name);
}

function date(s, name) {
    return inpt("date", s, name);
}

function datetime(s, name) {
    return inpt("datetime", s, name);
}

function datetime_local(s, name) {
    return inpt("datetime-local", s, name);
}

function month(s, name) {
    return inpt("month", s, name);
}

function week(s, name) {
    return inpt("week", s, name);
}

function time(s, name) {
    return inpt("time", s, name);
}

function crad(s) {
    if (suspendScripts)
        return;

    var x = input(document.createElement("input"), s,
                  function(x) { return function(v) { x.checked = (x.value === v); }; }, "radio");
    x.onclick = x.onkeyup = x.oninput = x.onchange = x.onpropertychange = function() { sv(s, x.value) };
    setTimeout(function() {
	x.defaultChecked = x.checked = (s.data === x.value);
    }, 10);

    return x;
}

function selectValue(x) {
    if (x.options.length == 0)
        return "";
    else
        return x.options[x.selectedIndex].value;
}

function setSelectValue(x, v) {
  for (var i = 0; i < x.options.length; ++i) {
      if (x.options[i].value == v) {
          x.selectedIndex = i;
          return;
      }
  }

  if (v != "")
      er("Setting <select> to nonexistent value: " + v);
}

function sel(s, content) {
    if (suspendScripts)
        return;

    var dummy = document.createElement("span");
    dummy.innerHTML = "<select>" + content + "</select>";

    var x = dummy.firstChild;
    for (var i = 0; i < x.options.length; ++i) {
        if (x.options[i].value == "")
            x.options[i].value = x.options[i].text;
        else
            x.options[i].value = x.options[i].value.substring(1);
    }

    x = input(x, s, function(x) { return function(v) { if (selectValue(x) != v) setSelectValue(x, v); }; });

    setSelectValue(x, s.data);
    if (selectValue(x) != s.data)
        sv(s, selectValue(x));
    x.onchange = function() { sv(s, selectValue(x)) };

    return x;
}

function chk(s) {
    if (suspendScripts)
        return;

    var x = input(document.createElement("input"), s,
                  function(x) { return function(v) { if (x.checked != v) x.checked = v; }; }, "checkbox");
    x.defaultChecked = x.checked = s.data;
    x.onclick = x.onkeyup = x.oninput = x.onchange = x.onpropertychange = function() { sv(s, x.checked) };

    return x;
}

function tbx(s) {
    if (suspendScripts)
        return;

    var x = input(document.createElement("textarea"), s,
                  function(x) { return function(v) { if (x.value != v) x.value = v; }; });
    x.innerHTML = s.data;
    x.onkeyup = x.oninput = x.onchange = x.onpropertychange = function() { sv(s, x.value) };

    return x;
}

function dynClass(pnode, html, s_class, s_style) {
    if (suspendScripts)
        return;

    var htmlCls = {v : null};
    html = flatten(htmlCls, html);
    htmlCls = htmlCls.v;

    var dummy = document.createElement(pnode);
    suspendScripts = true;
    dummy.innerHTML = html;
    suspendScripts = false;
    var html = dummy.firstChild;
    dummy.removeChild(html);
    if (pnode == "table" && html.tagName == "TBODY") {
        html = html.firstChild;
    }

    var x = null;
    var y = null;

    var classNameBefore = html.className;
    var styleCssBefore = html.style.cssText;

    if (s_class) {
        x = document.createElement("script");
        x.dead = false;
        x.signal = s_class;
        x.sources = null;
        x.closures = htmlCls;

        x.recreate = function(v) {
            for (var ls = x.closures; ls != htmlCls; ls = ls.next)
                freeClosure(ls.data);

            var cls = {v : null};
            var s = flatten(cls, v);
            if (classNameBefore)
                s += " " + classNameBefore;
            html.className = s;
	    x.closures = concat(cls.v, htmlCls);
        }

        populate(x);
    }

    if (s_style) {
        var htmlCls2 = s_class ? null : htmlCls;
        y = document.createElement("script");
        y.dead = false;
        y.signal = s_style;
        y.sources = null;
        y.closures = htmlCls2;

        y.recreate = function(v) {
            for (var ls = y.closures; ls != htmlCls2; ls = ls.next)
                freeClosure(ls.data);

            var cls = {v : null};
            var s = flatten(cls, v);
            if (styleCssBefore)
                s += " " + styleCssBefore;
            html.style.cssText = s;
	    y.closures = concat(cls.v, htmlCls2);
        }

        populate(y);
    }

    addNode(html);
    runScripts(html);

    if (x)
        html.appendChild(x);
    if (y)
        html.appendChild(y);
}

function bodyDynClass(s_class, s_style) {
    if (suspendScripts)
        return;

    var htmlCls = null;

    if (s_class) {
        var x = document.createElement("script");
        x.dead = false;
        x.signal = s_class;
        x.sources = null;
        x.closures = htmlCls;

        x.recreate = function(v) {
            for (var ls = x.closures; ls != htmlCls; ls = ls.next)
                freeClosure(ls.data);

            var cls = {v : null};
            document.body.className = flatten(cls, v);
            console.log("className to + " + document.body.className);
	    x.closures = concat(cls.v, htmlCls);
        }

        document.body.appendChild(x);
        populate(x);
    }

    if (s_style) {
        var htmlCls2 = s_class ? null : htmlCls;
        var y = document.createElement("script");
        y.dead = false;
        y.signal = s_style;
        y.sources = null;
        y.closures = htmlCls2;

        y.recreate = function(v) {
            for (var ls = y.closures; ls != htmlCls2; ls = ls.next)
                freeClosure(ls.data);

            var cls = {v : null};
            document.body.style.cssText = flatten(cls, v);
            console.log("style to + " + document.body.style.cssText);
	    y.closures = concat(cls.v, htmlCls2);
        }

        document.body.appendChild(y);
        populate(y);
    }
}

function addOnChange(x, f) {
    var old = x.onchange;
    if (old == null)
        x.onchange = f;
    else
        x.onchange = function() { old(); f(); };
}

function addOnInput(x, f) {
    var old = x.oninput;
    if (old == null)
        x.oninput = f;
    else
        x.oninput = function() { old(); f(); };
}

function addOnKeyUp(x, f) {
    var old = x.onkeyup;
    if (old == null)
        x.onkeyup = f;
    else
        x.onkeyup = function(x) { old(x); f(x); };
}


// Basic string operations

function eh(x) {
    if (x == null)
        return "NULL";
    else
        return flattenLocal(x).split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}

function ts(x) { return x.toString() }
function bs(b) { return (b ? "True" : "False") }
function s2b(s) { return s == "True" ? true : s == "False" ? false : null; }
function s2be(s) { return s == "True" ? true : s == "False" ? false : er("Illegal Boolean " ^ s); }

function id(x) { return x; }
function sub(s, i) { return Array.from(s)[i]; }
function suf(s, i) { return Array.from(s).slice(i).join(""); }
function slen(s) { return Array.from(s).length; }
function sidx(s, ch) {
    var r = Array.from(s).indexOf(ch);
    if (r == -1)
        return null;
    else
        return r;
}
function ssidx(h, n) {
    if (n == "") return 0;
    var ah = Array.from(h);
    var an = Array.from(n);
    var i = 0, y = 0;
    var top = ah.length - an.length + 1;
    if (top < 0) top = 0;
    var found = true;
    
    for(i = 0; i < top; ++i) {
	found = true;
	
	for (y = 0; y < an.length; ++y) {
	    if (ah[i + y] != an[y]) {
		found = false;
		break;
	    }		
	}

	if (found)
	    return i;
    }
    return null;
}

function sspn(s, chs) {
    var s2 = Array.from(s);
    var chs2 = Array.from(chs);
    
    for (var i = 0; i < s2.length; ++i)
        if (chs2.indexOf(s2[i]) != -1)
            return i;

    return s2.length;
}
function schr(s, ch) {
    var r = s.indexOf(ch);
    if (r == -1)
        return null;
    else
        return s.substring(r);
}
function ssub(s, start, len) {
    return Array.from(s).slice(start, start+len).join("");
}
function strlenGe(s, len) {
    return slen(s) >= len;
}

function trimZeroes(s) {
    for (var i = 0; i < s.length; ++i)
        if (s.charAt(i) != '0') {
            if (i > 0)
                return s.substring(i);
            else
                return s;
        }

    if (s.length == 0)
        return s;
    else
        return "0";
}

function pi(s) {
    var st = trimZeroes(s);
    var r = parseInt(st);
    if (r.toString() == st)
        return r;
    else
        er("Can't parse int: " + s);
}

function pfl(s) {
    var r = parseFloat(s);
    if (r.toString() == s)
        return r;
    else
        er("Can't parse float: " + s);
}

function pio(s) {
    var st = trimZeroes(s);
    var r = parseInt(st);
    if (r.toString() == st)
        return r;
    else
        return null;
}

function pflo(s) {
    var r = parseFloat(s);
    if (r.toString() == s)
        return r;
    else
        return null;
}

function parseSource(s1, s2) {
    return eval("s" + s1 + "_" + s2);
}

function uf(s) {
    if (s.length == 0)
        return "_";
    s = s.replace(/\./g, ".2E");
    return (s.charAt(0) == '_' ? "_" : "") + encodeURIComponent(s).replace(/%/g, ".");
}

function uu(s) {
    if (s.length > 0 && s.charAt(0) == '_') {
        s = s.substring(1);
    } else if (s.length >= 3 && (s.charAt(0) == '%' || s.charAt(0) == '.')
               && s.charAt(1) == '5' && (s.charAt(2) == 'f' || s.charAt(2) == 'F'))
        s = s.substring(3);
    s = s.replace(/\+/g, " ");
    s = s.replace(/\./g, "%");
    return decodeURIComponent(s);
}

function atr(s) {
    return s.replace(/\"/g, "&quot;").replace(/&/g, "&amp;")
}

function ub(b) {
    return b ? "1" : "0";
}

function uul(getToken, getData) {
    var tok = getToken();
    if (tok == "Nil") {
        return null;
    } else if (tok == "Cons") {
        var d = getData();
        var l = uul(getToken, getData);
        return {_1:d, _2:l};
    } else
        whine("Can't unmarshal list (" + tok + ")");
}

function strcmp(str1, str2) {
    return ((str1 == str2) ? 0 : ((str1 > str2) ? 1 : -1));
}

function chr(n) {
    return String.fromCodePoint(n);
}

function htmlifySpecialChar(ch) {
    return "&#" + ch.codePointAt(0) + ";";
}


// Remote calls

var client_id = null;
var client_pass = 0;
var url_prefix = "/";
var timeout = 60;
var isPost = false;

function getXHR(uri)
{
    try {
        return new XMLHttpRequest();
    } catch (e) {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                whine("Your browser doesn't seem to support AJAX.");
            }
        }
    }
}

var sig = null;

var unloading = false, inFlight = null;

function unload() {
    for (; inFlight; inFlight = inFlight.next) {
        inFlight.data.abort();
    }
}

function requestUri(xhr, uri, needsSig, isRpc) {
    var extraData = null;

    if (isRpc && uri.length > 2000) {
        extraData = uri.substring(2000);
        uri = uri.substring(0, 2000);
    }

    xhr.open("POST", uri, !unloading);
    xhr.setRequestHeader("Content-type", "text/plain");

    if (client_id != null) {
        xhr.setRequestHeader("UrWeb-Client", client_id.toString());
        xhr.setRequestHeader("UrWeb-Pass", client_pass.toString());
    }

    if (needsSig) {
        if (sig == null)
            whine("Missing cookie signature!");

        xhr.setRequestHeader("UrWeb-Sig", sig);
    }

    inFlight = cons(xhr, inFlight);
    xhr.send(extraData);
}

function xhrFinished(xhr) {
    xhr.abort();
    inFlight = remove(xhr, inFlight);
}

function unurlify(parse, s) {
    return parse(s);
}

function redirect(s) {
    window.location = s;
}

function makeSome(isN, v) {
    if (isN)
        return {v: v};
    else
        return v;
}

function rc(prefix, uri, parse, k, needsSig, isN) {
    if (!maySuspend)
        er("May not 'rpc' in main thread of 'code' for <active>");

    uri = cat(prefix, uri);
    uri = flattenLocal(uri);
    var xhr = getXHR();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var isok = false;

            try {
                if (xhr.status == 200)
                    isok = true;
            } catch (e) { }

            if (isok) {
                var lines = xhr.responseText.split("\n");
                if (lines.length != 2) {
                    if (isN == null)
                        whine("Bad RPC response lines");
                    else
                        k(null);
                } else {
                    eval(lines[0]);

                    try {
                        var v = parse(lines[1]);
                        try {
                            k(makeSome(isN, v));
                        } catch (v) {
                            doExn(v);
                        }
                    } catch (v) {
                        k(null);
                    }
                }
            } else {
                if (isN == null)
                    conn(xhr.responseText);
                else
                    k(null);
            }

            xhrFinished(xhr);
        }
    };

    requestUri(xhr, uri, needsSig, true);
}

function path_join(s1, s2) {
    if (s1.length > 0 && s1.charAt(s1.length-1) == '/')
        return s1 + s2;
    else
        return s1 + "/" + s2;
}

var channels = [];

function newQueue() {
    return { front : null, back : null };
}
function enqueue(q, v) {
    if (q.front == null) {
        q.front = cons(v, null);
        q.back = q.front;
    } else {
        var node = cons(v, null);
        q.back.next = node;
        q.back = node;
    }
}
function dequeue(q) {
    if (q.front == null)
        return null;
    else {
        var r = q.front.data;
        q.front = q.front.next;
        if (q.front == null)
            q.back = null;
        return r;
    }
}

function newChannel() {
    return { msgs : newQueue(), listeners : newQueue() };
}

function listener() {
    var uri = path_join(url_prefix, ".msgs");
    var xhr = getXHR();
    var tid, orsc, onTimeout, lastTick;

    var connect = function () {
        xhr.onreadystatechange = orsc;
        lastTick = new Date().getTime();
        tid = window.setTimeout(onTimeout, timeout * 500);
        requestUri(xhr, uri, false, false);
    }

    orsc = function() {
        if (xhr.readyState == 4) {
            window.clearTimeout(tid);

            var isok = false;

            try {
                if (xhr.status == 200)
                    isok = true;
            } catch (e) { }

            if (isok) {
                var text = xhr.responseText;
                if (text == "")
                    return;
                var lines = text.split("\n");

                if (lines.length == 1 && lines[0] == "R") {
                    lameDuck = true;

                    if (isPost)
                        history.back();
                    else
                        location.reload();

                    return;
                }

                if (lines.length < 2) {
                    discon();
                    return;
                }

                var messageReader = function(i) {
                    if (i+1 >= lines.length) {
                        xhrFinished(xhr);
                        connect();
                    }
                    else {
                        var chn = lines[i];
                        var msg = lines[i+1];

                        if (chn == "E") {
                            eval(msg);
                            window.setTimeout(function() { messageReader(i+2); }, 0);
                        } else {
                            if (chn < 0)
                                whine("Out-of-bounds channel in message from remote server");

                            var ch;

                            if (chn >= channels.length || channels[chn] == null) {
                                ch = newChannel();
                                channels[chn] = ch;
                            } else
                                ch = channels[chn];

                            var listener = dequeue(ch.listeners);
                            if (listener == null) {
                                enqueue(ch.msgs, msg);
                            } else {
                                try {
                                    listener(msg);
                                } catch (v) {
                                    doExn(v);
                                }
                            }

                            messageReader(i+2);
                        }
                    }
                }

                messageReader(0);
            }
            else {
                try {
                    if (xhr.status != 0)
                        servErr("Error querying remote server for messages: " + xhr.status);
                } catch (e) { }
            }
        }
    };

    onTimeout = function() {
        var thisTick = new Date().getTime();
        xhrFinished(xhr);

        if (thisTick - lastTick > timeout * 1000) {
            if (confirm("The session for this page has expired.  Please choose \"OK\" to reload.")) {
                if (isPost)
                    history.back();
                else
                    location.reload();
            }
        } else {
            connect();
        }
    };

    connect();
}

function rv(chn, parse, k) {
    if (!maySuspend)
        er("May not 'recv' in main thread of 'code' for <active>");

    if (chn == null)
        er("Client-side code tried to recv() from a channel belonging to a different page view.");

    if (chn < 0)
        whine("Out-of-bounds channel receive");

    var ch;

    if (chn >= channels.length || channels[chn] == null) {
        ch = newChannel();
        channels[chn] = ch;
    } else
        ch = channels[chn];

    var msg = dequeue(ch.msgs);
    if (msg == null) {
        enqueue(ch.listeners, function(msg) { k(parse(msg)); });
    } else {
        try {
            k(parse(msg));
        } catch (v) {
            doExn(v);
        }
    }
}

function sl(ms, k) {
    if (!maySuspend)
        er("May not 'sleep' in main thread of 'code' for <active>");

    window.setTimeout(function() { k(null); }, ms);
}

function sp(e) {
    window.setTimeout(function() { execF(e); }, 0);
}


// The Ur interpreter

var urfuncs = [];

function lookup(env, n) {
    while (env != null) {
        if (n == 0)
            return env.data;
        else {
            --n;
            env = env.next;
        }
    }

    whine("Out-of-bounds Ur variable reference");
}

function execP(env, p, v) {
    switch (p.c) {
    case "v":
        return cons(v, env);
    case "c":
        if (v == p.v)
            return env;
        else
            return false;
    case "s":
        if (v == null)
            return false;
        else
            return execP(env, p.p, p.n ? v.v : v);
    case "1":
        if (v.n != p.n)
            return false;
        else
            return execP(env, p.p, v.v);
    case "r":
        for (var fs = p.l; fs != null; fs = fs.next) {
            env = execP(env, fs.data.p, v["_" + fs.data.n]);
            if (env == false)
                return false;
        }
        return env;
    default:
        whine("Unknown Ur pattern kind " + p.c);
    }
}

function exec0(env, e) {
    return exec1(env, null, e);
}

function exec1(env, stack, e) {
    var stack, usedK = false;

    var saveEnv = function() {
        if (stack.next != null && stack.next.data.c != "<")
            stack = cons({c: "<", env: env}, stack.next);
        else
            stack = stack.next;
    };

    while (true) {
        switch (e.c) {
        case "c":
            var v = e.v;
            if (stack == null)
                return v;
            var fr = stack.data;

            switch (fr.c) {
            case "s":
                e = {c: "c", v: {v: v}};
                stack = stack.next;
                break;
            case "1":
                e = {c: "c", v: {n: fr.n, v: v}};
                stack = stack.next;
                break;
            case "f":
                fr.args[fr.pos++] = v;
                if (fr.a == null) {
                    var res;
                    stack = stack.next;

                    if (fr.f.apply)
                        res = fr.f.apply(null, fr.args);
                    else if (fr.args.length == 0)
                        res = fr.f();
                    else if (fr.args.length == 1)
                        res = fr.f(fr.args[0]);
                    else if (fr.args.length == 2)
                        res = fr.f(fr.args[0], fr.args[1]);
                    else if (fr.args.length == 3)
                        res = fr.f(fr.args[0], fr.args[1], fr.args[2]);
                    else if (fr.args.length == 4)
                        res = fr.f(fr.args[0], fr.args[1], fr.args[2], fr.args[3]);
                    else if (fr.args.length == 5)
                        res = fr.f(fr.args[0], fr.args[1], fr.args[2], fr.args[3], fr.args[4]);
                    else
                        whine("Native function has " + fr.args.length + " args, but there is no special case for that count.");

                    e = {c: "c", v: res};
                    if (usedK) return null;
                } else {
                    e = fr.a.data;
                    fr.a = fr.a.next;
                }
                break;
            case "a1":
                e = fr.x;
                stack = cons({c: "a2", f: v}, stack.next);
                break;
            case "a2":
                if (fr.f == null)
                    whine("Ur: applying null function");
                else if (fr.f.body) {
                    saveEnv();
                    env = cons(v, fr.f.env);
                    e = fr.f.body;
                } else {
                    e = {c: "c", v: fr.f(v)};
                    stack = stack.next;
                }
                break;
            case "<":
                env = fr.env;
                stack = stack.next;
                break;
            case "r":
                fr.fs["_" + fr.n] = v;
                if (fr.l == null) {
                    e = {c: "c", v: fr.fs};
                    stack = stack.next;
                } else {
                    fr.n = fr.l.data.n;
                    e = fr.l.data.v;
                    fr.l = fr.l.next;
                }
                break;
            case ".":
                e = {c: "c", v: v["_" + fr.f]};
                stack = stack.next;
                break;
            case ";":
                e = fr.e2;
                stack = stack.next;
                break;
            case "=":
                saveEnv();
                env = cons(v, env);
                e = fr.e2;
                break;
            case "m":
                var ps;
                for (ps = fr.p; ps != null; ps = ps.next) {
                    var r = execP(env, ps.data.p, v);
                    if (r != false) {
                        saveEnv();
                        env = r;
                        e = ps.data.b;
                        break;
                    }
                }
                if (ps == null)
                    whine("Match failure in Ur interpretation");
                break;
            default:
                whine("Unknown Ur continuation kind " + fr.c);
            }

            break;
        case "v":
            e = {c: "c", v: lookup(env, e.n)};
            break;
        case "n":
            var idx = e.n;
            e = urfuncs[idx];
            if (e.c == "t")
                e = urfuncs[idx] = eval("(" + e.f + ")");
            break;
        case "s":
            stack = cons({c: "s"}, stack);
            e = e.v;
            break;
        case "1":
            stack = cons({c: "1", n: e.n}, stack);
            e = e.v;
            break;
        case "f":
            if (e.a == null)
                e = {c: "c", v: e.f()};
            else {
                var args = [];
                stack = cons({c: "f", f: e.f, args: args, pos: 0, a: e.a.next}, stack);
                if (!e.a.data.c) alert("[2] fr.f = " + e.f + "; 0 = " + e.a.data);
                e = e.a.data;
            }
            break;
        case "l":
            e = {c: "c", v: {env: env, body: e.b}};
            break;
        case "a":
            stack = cons({c: "a1", x: e.x}, stack);
            e = e.f;
            break;
        case "r":
            if (e.l == null)
                whine("Empty Ur record in interpretation");
            var fs = {};
            stack = cons({c: "r", n: e.l.data.n, fs: fs, l: e.l.next}, stack);
            e = e.l.data.v;
            break;
        case ".":
            stack = cons({c: ".", f: e.f}, stack);
            e = e.r;
            break;
        case ";":
            stack = cons({c: ";", e2: e.e2}, stack);
            e = e.e1;
            break;
        case "=":
            stack = cons({c: "=", e2: e.e2}, stack);
            e = e.e1;
            break;
        case "m":
            stack = cons({c: "m", p: e.p}, stack);
            e = e.e;
            break;
        case "e":
            e = {c: "c", v: cs({c: "wc", env: env, body: e.e})};
            break;
        case "wc":
            env = e.env;
            e = e.body;
            break;
        case "K":
            { var savedStack = stack.next, savedEnv = env;
                e = {c: "c", v: function(v) { return exec1(savedEnv, savedStack, {c: "c", v: v}); } };}
            usedK = true;
            break;
        default:
            whine("Unknown Ur expression kind " + e.c);
        }
    }
}

function execD(e) {
    return exec0(null, e);
}

function exec(e) {
    var r = exec0(null, e);

    if (r != null && r.body != null)
        return function(v) { return exec0(cons(v, r.env), r.body); };
    else
        return r;
}

function execF(f, x) {
    return exec0(cons(x, f.env), f.body);
}


// Wrappers

function confrm(s) {
    return confirm(s) ? true : false;
}


// URL blessing

var urlRules = null;

function checkUrl(s) {
    for (var r = urlRules; r; r = r.next) {
        var ru = r.data;
        if (ru.prefix ? s.indexOf(ru.pattern) == 0 : s == ru.pattern)
            return ru.allow ? s : null;
    }

    return null;
}

function bless(s) {
    u = checkUrl(s);
    if (u == null)
        er("Disallowed URL: " + s);
    return u;
}


// Attribute name blessing
var maxCh = chr(127);

function blessData(s) {
    var chars = Array.from(s);
    
    for (var i = 0; i < chars.length; ++i) {
        var c = chars[i];
        if (c > maxCh || (!isAlnum(c) && c != '-' && c != '_'))
            er("Disallowed character in data-* attribute name");
    }

    return s;
}


// CSS validation

function atom(s) {
    var chars = Array.from(s);
    
    for (var i = 0; i < chars.length; ++i) {
        var c = chars[i];
        if (c > maxCh || (!isAlnum(c) && c != '+' && c != '-' && c != '.' && c != '%' && c != '#'))
            er("Disallowed character in CSS atom");
    }

    return s;
}

function css_url(s) {
    var chars = Array.from(s);
    
    for (var i = 0; i < chars.length; ++i) {
        var c = chars[i];
        if (c > maxCh || (!isAlnum(c) && c != ':' && c != '/' && c != '.' && c != '_' && c != '+'
			  && c != '-' && c != '%' && c != '?' && c != '&' && c != '=' && c != '#'))
            er("Disallowed character in CSS URL");
    }

    return s;
}

function property(s) {
    var chars = Array.from(s);
    
    if (chars.length <= 0)
        er("Empty CSS property");

    if (chars[0] > maxCh || (!isLower(chars[0]) && chars[0] != '_'))
        er("Bad initial character in CSS property");

    for (var i = 0; i < chars.length; ++i) {
        var c = chars[i];
        if (c > maxCh || (!isLower(c) && !isDigit(c) && c != '_' && c != '-'))
            er("Disallowed character in CSS property");
    }

    return s;
}


// ID generation

var nextId = 0;

function fresh() {
    return "uw" + (--nextId);
}

function giveFocus(id) {
    var node = document.getElementById(id);

    if (node)
        node.focus();
    else
        er("Tried to give focus to ID not used in document: " + id);
}


// App-specific code
