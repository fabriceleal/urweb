
fun from_m_upto_n f m n =
    if m < n then
	<xml>
	  { f m }
	  { from_m_upto_n f (m + 1) n }
	</xml>
    else
	<xml></xml>

fun from_m_upto_n2 (f : int -> transaction xbody) (m : int) (n : int) : transaction xbody =
    if m < n then
	h <- f m;
	t <- from_m_upto_n2 f (m + 1) n;
	return <xml>
	  { h }
	  { t }
	</xml>
    else
	return <xml></xml>
	
fun test_fn_both_sides [a ::: Type] (_ : eq a) (_ : show a) (f : unit -> a) (expected : a) (testname : string) : xbody =
<xml>
  <p>Server side test: {[testname]}</p>
  <pre>{[show (f () = expected)]}</pre>	
  <active code={return <xml><p>Client side test: {[testname]}</p><pre>{[show (f () = expected)]}</pre></xml>}>
</active>
	</xml>

fun test_fn_both_sides2 [a ::: Type] (_ : eq a) (_ : show a) (f : unit -> a) (serverexp : a) (expected : a) (testname : string) : xbody =
<xml>
  <p>Test: {[testname]}</p>
  <active code={
	   let
	       val stest = (serverexp = expected)
	   in
	   return <xml>
	     <p>Server side test: {[testname]}</p>
	     <pre>{[show stest]}</pre>
	     {if stest then
		  <xml></xml>
	      else
		  <xml>
		    <p>S: {[serverexp]}</p>
		    <p>E: {[expected]}</p>
		  </xml>}
	   </xml>
	   end}>
</active>
  <active code={return <xml><p>Client side test: {[testname]}</p><pre>{[show (f () = expected)]}</pre></xml>}>
</active>
</xml>

fun test_fn_sside [a ::: Type] (_ : eq a) (_ : show a) (f : unit -> a) (expected : a) (testname : string) : xbody =
    <xml>
      <p>Server side test: {[testname]}</p>
      <pre>{[show (f () = expected)]}</pre>
    </xml>

    fun test_fn_cside [a ::: Type] (_ : eq a) (_ : show a) (f : unit -> a) (expected : a) (testname : string) : xbody =
	let
	    val r = f ()
	    val v = r = expected
	in
	    <xml>
	      <active code={return <xml><p>Client side test: {[testname]}</p><pre>{[show v]}</pre>
		{if v then
		     <xml></xml>
		 else
		     <xml>Expected '{[show expected]}', is '{[show r]}'</xml>}
	      </xml>}>
</active>
	</xml>
	end

fun test_fn_cside_int (f : unit -> int) (expected : int) (testname : string) : xbody =
    <xml>
      <active code={let
		    val computed = f ()		    
		    in
			if computed = expected then
			    return <xml><p>{[testname]}</p><pre>True</pre></xml>
			else
			    return <xml><p>{[testname]}</p><pre>False</pre></xml>
		    end}>
</active>
	</xml>

fun test_fn_cside_ch (f : unit -> char) (expected : char) (testname : string) : xbody =
    <xml>
      <active code={let
		    val computed = f ()
		    val msgErr = "Expected (S) " ^ (show expected) ^ " [" ^ (show (ord expected)) ^ "] but is (C) " ^
				 (show computed) ^ "[" ^ (show (ord computed)) ^ "]."
		    in
			if computed = expected then
			    return <xml></xml>
			else
			    return <xml><p>ERROR {[testname]}: {[msgErr]}</p></xml>
		    end}>
      </active>
	</xml>

fun test_fn_cside_b (f : unit -> bool) (expected : bool) (testname : string) : xbody =
    <xml>
      <active code={let
		    val computed = f ()
		    val msgErr = "Expected (S) " ^ (show expected) ^ " but is (C) " ^
				 (show computed) ^ "."
		    in
			if computed = expected then
			    return <xml></xml>
			else
			    return <xml><p>ERROR {[testname]}: {[msgErr]}</p></xml>
		    end}>
      </active>
	</xml>

fun generateTests _ =
    return { SL1 = (strlen "𝌆𝌇𝌈𝌉"),
	     SL2 = (strlen "𝌇𝌈𝌉"),
	     SL3 = (strlen "𝌈𝌉"),
	     SL4 = (strlen "𝌉"),
	     SS1 = (substring "𝌆𝌇𝌈𝌉" 1 3),
	     SS2 = (substring "𝌆𝌇𝌈𝌉" 2 2),
	     SS3 = (substring "𝌆𝌇𝌈𝌉" 3 1) ,
	     SLSS1 = (strlen (substring "𝌆𝌇𝌈𝌉" 1 3)),
	     SLSS2 = (strlen (substring "𝌆𝌇𝌈𝌉" 2 2)),
	     SLSS3 = (strlen (substring "𝌆𝌇𝌈𝌉" 3 1)),

	     SSB1 = (strsub "𝌆𝌇𝌈𝌉" 0),
	     SSB2 = (strsub "𝌆𝌇𝌈𝌉" 1),
	     SSB3 = (strsub "𝌆𝌇𝌈𝌉" 2),
	     SSB4 = (strsub "𝌆𝌇𝌈𝌉" 3),

	     SSF1 = (strsuffix "𝌆𝌇𝌈𝌉" 0),
	     SSF2 = (strsuffix "𝌆𝌇𝌈𝌉" 1),
	     SSF3 = (strsuffix "𝌆𝌇𝌈𝌉" 2),
	     SSF4 = (strsuffix "𝌆𝌇𝌈𝌉" 3),

	     SC1 = (strchr "𝌆𝌇𝌈𝌉" #"c"),
	     SC2 = (strchr "𝌆𝌇𝌈𝌉" (strsub "𝌆" 0)),
	     SC3 = (strchr "𝌆𝌇𝌈𝌉" (strsub "𝌇" 0)),
	     SC4 = (strchr "𝌆𝌇𝌈𝌉" (strsub "𝌈" 0)),
	     SC5 = (strchr "𝌆𝌇𝌈𝌉" (strsub "𝌉" 0)),

	     SI1 = (strindex "𝌆𝌇𝌈𝌉" #"c"),
	     SI2 = (strindex "𝌆𝌇𝌈𝌉" (strsub "𝌆" 0)),
	     SI3 = (strindex "𝌆𝌇𝌈𝌉" (strsub "𝌇" 0)),
	     SI4 = (strindex "𝌆𝌇𝌈𝌉" (strsub "𝌈" 0)),
	     SI5 = (strindex "𝌆𝌇𝌈𝌉" (strsub "𝌉" 0)),

	     SSI1 = (strsindex "𝌆𝌇𝌈𝌉" ""),
	     SSI2 = (strsindex "𝌆𝌇𝌈𝌉" "𝌆𝌇𝌈𝌉"),
	     SSI3 = (strsindex "𝌆𝌇𝌈𝌉" "𝌆𝌇𝌈c"),
	     SSI4 = (strsindex "𝌆𝌇𝌈𝌉" "𝌇𝌈𝌉"),
	     SSI5 = (strsindex "𝌆𝌇𝌈𝌉" "𝌇𝌈c"),
	     SSI6 = (strsindex "𝌆𝌇𝌈𝌉" "𝌈𝌉"),
	     SSI7 = (strsindex "𝌆𝌇𝌈𝌉" "𝌈c"),
	     SSI8 = (strsindex "𝌆𝌇𝌈𝌉" "𝌉"),
	     SSI9 = (strsindex "𝌆𝌇𝌈𝌉" "c"),

	     SCSP1 = (strcspn "𝌆𝌇𝌈𝌉" ""),
	     SCSP2 = (strcspn "𝌆𝌇𝌈𝌉" "𝌆𝌇𝌈𝌉"),
	     SCSP3 = (strcspn "𝌆𝌇𝌈𝌉" "𝌆"),
	     SCSP4 = (strcspn "𝌆𝌇𝌈𝌉" "𝌇𝌈𝌉"),
	     SCSP5 = (strcspn "𝌆𝌇𝌈𝌉" "𝌈𝌉"),
	     SCSP6 = (strcspn "𝌆𝌇𝌈𝌉" "𝌉"),

	     OSS1 = (ord (strsub "𝌆𝌇𝌈𝌉" 0)),
	     OSS2 = (ord (strsub "𝌆𝌇𝌈𝌉" 1)),
	     OSS3 = (ord (strsub "𝌆𝌇𝌈𝌉" 2)),
	     OSS4 = (ord (strsub "𝌆𝌇𝌈𝌉" 3)),

	     SSS1 = (show (strsub "𝌆𝌇𝌈𝌉" 0)),
	     SSS2 = (show (strsub "𝌆𝌇𝌈𝌉" 1)),
	     SSS3 = (show (strsub "𝌆𝌇𝌈𝌉" 2)),
	     SSS4 = (show (strsub "𝌆𝌇𝌈𝌉" 3))
	   }

fun highencode () : transaction page =
    t <- source None;
    return <xml>
      <body onload={tests <- rpc (generateTests ()); set t (Some tests); return ()}>

	<dyn signal={tests' <- signal t;
		     case tests' of
			 None => return <xml></xml>
		       | Some tests => return <xml>

			 {test_fn_cside (fn _ => strlen "𝌆𝌇𝌈𝌉") tests.SL1 "high encode - strlen 1"}
			 {test_fn_cside (fn _ => strlen "𝌇𝌈𝌉") tests.SL2 "high encode - strlen 2"}
			 {test_fn_cside (fn _ => strlen "𝌈𝌉") tests.SL3 "high encode - strlen 3"}
			 {test_fn_cside (fn _ => strlen "𝌉") tests.SL4 "high encode - strlen 4"}
			 
			 {test_fn_cside (fn _ => substring "𝌆𝌇𝌈𝌉" 1 3) tests.SS1 "high encode - substring 1"}
			 {test_fn_cside (fn _ => substring "𝌆𝌇𝌈𝌉" 2 2) tests.SS2 "high encode - substring 2"}
			 {test_fn_cside (fn _ => substring "𝌆𝌇𝌈𝌉" 3 1) tests.SS3 "high encode - substring 3"}

			 {test_fn_cside (fn _ => strlen (substring "𝌆𝌇𝌈𝌉" 1 3)) tests.SLSS1 "high encode - strlen of substring 1"}
			 {test_fn_cside (fn _ => strlen (substring "𝌆𝌇𝌈𝌉" 2 2)) tests.SLSS2 "high encode - strlen of substring 2"}
			 {test_fn_cside (fn _ => strlen (substring "𝌆𝌇𝌈𝌉" 3 1)) tests.SLSS3 "high encode - strlen of substring 3"}

			 {test_fn_cside (fn _ => strsub "𝌆𝌇𝌈𝌉" 0) tests.SSB1 "high encode - strsub 1"}
			 {test_fn_cside (fn _ => strsub "𝌆𝌇𝌈𝌉" 1) tests.SSB2 "high encode - strsub 2"}
			 {test_fn_cside (fn _ => strsub "𝌆𝌇𝌈𝌉" 2) tests.SSB3 "high encode - strsub 3"}
			 {test_fn_cside (fn _ => strsub "𝌆𝌇𝌈𝌉" 3) tests.SSB4 "high encode - strsub 4"}

			 {test_fn_cside (fn _ => strsuffix "𝌆𝌇𝌈𝌉" 0) tests.SSF1 "high encode - strsuffix 1"}
			 {test_fn_cside (fn _ => strsuffix "𝌆𝌇𝌈𝌉" 1) tests.SSF2 "high encode - strsuffix 2"}
			 {test_fn_cside (fn _ => strsuffix "𝌆𝌇𝌈𝌉" 2) tests.SSF3 "high encode - strsuffix 3"}
			 {test_fn_cside (fn _ => strsuffix "𝌆𝌇𝌈𝌉" 3) tests.SSF4 "high encode - strsuffix 4"}

			 {test_fn_cside (fn _ => strchr "𝌆𝌇𝌈𝌉" #"c") tests.SC1 "high encode - strchr 1"}
			 {test_fn_cside (fn _ => strchr "𝌆𝌇𝌈𝌉" (strsub "𝌆" 0)) tests.SC2 "high encode - strchr 2"}
			 {test_fn_cside (fn _ => strchr "𝌆𝌇𝌈𝌉" (strsub "𝌇" 0)) tests.SC3 "high encode - strchr 3"}
			 {test_fn_cside (fn _ => strchr "𝌆𝌇𝌈𝌉" (strsub "𝌈" 0)) tests.SC4 "high encode - strchr 4"}
			 {test_fn_cside (fn _ => strchr "𝌆𝌇𝌈𝌉" (strsub "𝌉" 0)) tests.SC5 "high encode - strchr 5"}

			 {test_fn_cside (fn _ => strindex "𝌆𝌇𝌈𝌉" #"c") tests.SI1 "high encode - strindex 1"}
			 {test_fn_cside (fn _ => strindex "𝌆𝌇𝌈𝌉" (strsub "𝌆" 0)) tests.SI2 "high encode - strindex 2"}
			 {test_fn_cside (fn _ => strindex "𝌆𝌇𝌈𝌉" (strsub "𝌇" 0)) tests.SI3 "high encode - strindex 3"}
			 {test_fn_cside (fn _ => strindex "𝌆𝌇𝌈𝌉" (strsub "𝌈" 0)) tests.SI4 "high encode - strindex 4"}
			 {test_fn_cside (fn _ => strindex "𝌆𝌇𝌈𝌉" (strsub "𝌉" 0)) tests.SI5 "high encode - strindex 5"}

			 {test_fn_cside (fn _ => strsindex "𝌆𝌇𝌈𝌉" "") tests.SSI1 "high encode - strsindex 1"}
			 {test_fn_cside (fn _ => strsindex "𝌆𝌇𝌈𝌉" "𝌆𝌇𝌈𝌉") tests.SSI2 "high encode - strsindex 2"}
			 {test_fn_cside (fn _ => strsindex "𝌆𝌇𝌈𝌉" "𝌆𝌇𝌈c") tests.SSI3 "high encode - strsindex 3"}
			 {test_fn_cside (fn _ => strsindex "𝌆𝌇𝌈𝌉" "𝌇𝌈𝌉") tests.SSI4 "high encode - strsindex 4"}
			 {test_fn_cside (fn _ => strsindex "𝌆𝌇𝌈𝌉" "𝌇𝌈c") tests.SSI5 "high encode - strsindex 5"}
			 {test_fn_cside (fn _ => strsindex "𝌆𝌇𝌈𝌉" "𝌈𝌉") tests.SSI6 "high encode - strsindex 6"}
			 {test_fn_cside (fn _ => strsindex "𝌆𝌇𝌈𝌉" "𝌈c") tests.SSI7 "high encode - strsindex 7"}
			 {test_fn_cside (fn _ => strsindex "𝌆𝌇𝌈𝌉" "𝌉") tests.SSI8 "high encode - strsindex 8"}
			 {test_fn_cside (fn _ => strsindex "𝌆𝌇𝌈𝌉" "c") tests.SSI9 "high encode - strsindex 9"}

			 {test_fn_cside (fn _ => strcspn "𝌆𝌇𝌈𝌉" "") tests.SCSP1 "high encode - strcspn 1"}
			 {test_fn_cside (fn _ => strcspn "𝌆𝌇𝌈𝌉" "𝌆𝌇𝌈𝌉") tests.SCSP2 "high encode - strcspn 2"}
			 {test_fn_cside (fn _ => strcspn "𝌆𝌇𝌈𝌉" "𝌆") tests.SCSP3 "high encode - strcspn 3"}
			 {test_fn_cside (fn _ => strcspn "𝌆𝌇𝌈𝌉" "𝌇𝌈𝌉") tests.SCSP4 "high encode - strcspn 4"}
			 {test_fn_cside (fn _ => strcspn "𝌆𝌇𝌈𝌉" "𝌈𝌉") tests.SCSP5 "high encode - strcspn 5"}
			 {test_fn_cside (fn _ => strcspn "𝌆𝌇𝌈𝌉" "𝌉") tests.SCSP6 "high encode - strcspn 6"}
			 
			 {test_fn_cside (fn _ => ord (strsub "𝌆𝌇𝌈𝌉" 0)) tests.OSS1 "high encode - ord 1"}
			 {test_fn_cside (fn _ => ord (strsub "𝌆𝌇𝌈𝌉" 1)) tests.OSS2 "high encode - ord 2"}
			 {test_fn_cside (fn _ => ord (strsub "𝌆𝌇𝌈𝌉" 2)) tests.OSS3 "high encode - ord 3"}
			 {test_fn_cside (fn _ => ord (strsub "𝌆𝌇𝌈𝌉" 3)) tests.OSS4 "high encode - ord 4"}

			 {test_fn_cside (fn _ => show (strsub "𝌆𝌇𝌈𝌉" 0)) tests.SSS1 "high encode - show 1"}
			 {test_fn_cside (fn _ => show (strsub "𝌆𝌇𝌈𝌉" 1)) tests.SSS2 "high encode - show 2"}
			 {test_fn_cside (fn _ => show (strsub "𝌆𝌇𝌈𝌉" 2)) tests.SSS3 "high encode - show 3"}
			 {test_fn_cside (fn _ => show (strsub "𝌆𝌇𝌈𝌉" 3)) tests.SSS4 "high encode - show 4"}

		       </xml> } />

	</body>
    </xml>

(* substrings *)
fun substring1 _ = substring "abc" 0 3
fun substring2 _ = substring "abc" 1 2
fun substring3 _ = substring "abc" 2 1
fun substring4 _ = substring "ábó" 0 3
fun substring5 _ = substring "ábó" 1 2
fun substring6 _ = substring "ábó" 2 1
fun substring7 _ = substring "ábó" 0 2
fun substring8 _ = substring "ábó" 0 1
fun substring9 _ = substring "" 0 0

fun substringsserver _ =
    return {
     T1 = substring1 (),
     T2 = substring2 (),
     T3 = substring3 (),
     T4 = substring4 (),
     T5 = substring5 (),
     T6 = substring6 (),
     T7 = substring7 (),
     T8 = substring8 (),
     T9 = substring9 ()
    }
		   
fun substrings () : transaction page =
    t <- source None;
    return <xml>
      <body onload={r <- rpc (substringsserver ());
		    set t (Some r);
		    return () }>
	
	<dyn signal={r <- signal t; case r of None => return <xml></xml>
					    | Some t' =>
					      return <xml>
					   	{test_fn_both_sides2 substring1 t'.T1 "abc" "substrings 1"}
						{test_fn_both_sides2 substring2 t'.T2 "bc" "substrings 2"} 
						{test_fn_both_sides2 substring3 t'.T3 "c" "substrings 3"}
						{test_fn_both_sides2 substring4 t'.T4 "ábó" "substrings 4"}
						{test_fn_both_sides2 substring5 t'.T5 "bó" "substrings 5"}
						{test_fn_both_sides2 substring6 t'.T6 "ó" "substrings 6"}
						{test_fn_both_sides2 substring7 t'.T7 "áb" "substrings 7"}
						{test_fn_both_sides2 substring8 t'.T8 "á" "substrings 8"}
						{test_fn_both_sides2 substring9 t'.T9 "" "substrings 9"}
					      </xml>
		    } />
      </body>
    </xml>

(* strlen *)
fun strlen1 _ = strlen "abc"
fun strlen2 _ = strlen "çbc"
fun strlen3 _ = strlen "çãc"
fun strlen4 _ = strlen "çãó"
fun strlen5 _ = strlen "ç"
fun strlen6 _ = strlen "c"
fun strlen7 _ = strlen ""
fun strlen8 _ = strlen "が"
fun strlen9 _ = strlen "漢"
fun strlen10 _ = strlen "カ"
fun strlen11 _ = strlen "وظيفية"
fun strlen12 _ = strlen "函數"
fun strlen13 _ = strlen "Функциональное"
		 
fun strlensserver _ =
    return {
     T1 = strlen1 (),
     T2 = strlen2 (),
     T3 = strlen3 (),
     T4 = strlen4 (),
     T5 = strlen5 (),
     T6 = strlen6 (),
     T7 = strlen7 (),
     T8 = strlen8 (),
     T9 = strlen9 (),
     T10 = strlen10 (),
     T11 = strlen11 (),
     T12 = strlen12 (),
     T13 = strlen13 ()
    }
		 
fun strlens () : transaction page =
    t <- source None;
    return <xml>
      <body onload={r <- rpc (strlensserver());
		    set t (Some r);
		    return ()}>

	<dyn signal={r <- signal t; case r of None => return <xml></xml>
					    | Some t' =>
					      return <xml>
						{test_fn_both_sides2 strlen1 t'.T1 3 "strlen 1"}
						{test_fn_both_sides2 strlen2 t'.T2 3 "strlen 2"}
						{test_fn_both_sides2 strlen3 t'.T3 3 "strlen 3"}
						{test_fn_both_sides2 strlen4 t'.T4 3 "strlen 4"}
						{test_fn_both_sides2 strlen5 t'.T5 1 "strlen 5"}
						{test_fn_both_sides2 strlen6 t'.T6 1 "strlen 6"}
						{test_fn_both_sides2 strlen7 t'.T7 0 "strlen 7"}
						{test_fn_both_sides2 strlen8 t'.T8 1 "strlen 8"}
						{test_fn_both_sides2 strlen9 t'.T9 1 "strlen 9"}
						{test_fn_both_sides2 strlen10 t'.T10 1 "strlen 10"}
						{test_fn_both_sides2 strlen11 t'.T11 6 "strlen 11"}
						{test_fn_both_sides2 strlen12 t'.T12 2 "strlen 12"}
						{test_fn_both_sides2 strlen13 t'.T13 14 "strlen 13"}    
					      </xml>} />

  </body>
	</xml>

(* strlenGe *)
fun strlenGe1 _ = strlenGe "" 1
fun strlenGe2 _ = strlenGe "" 0
fun strlenGe3 _ = strlenGe "aba" 4
fun strlenGe4 _ = strlenGe "aba" 3
fun strlenGe5 _ = strlenGe "aba" 2
fun strlenGe6 _ = strlenGe "àçá" 4
fun strlenGe7 _ = strlenGe "àçá" 3
fun strlenGe8 _ = strlenGe "àçá" 2

fun strleGesserver _ = return {
		       T1 = strlenGe1 (),
		       T2 = strlenGe2 (),
		       T3 = strlenGe3 (),
		       T4 = strlenGe4 (),
		       T5 = strlenGe5 (),
		       T6 = strlenGe6 (),
		       T7 = strlenGe7 (),
		       T8 = strlenGe8 ()
		       }
		  
fun strlenGens () : transaction page =
    t <- source None;
    return <xml>
      <body onload={r <- rpc (strleGesserver());
		    set t (Some r);
		    return ()}>

	<dyn signal={r <- signal t; case r of None => return <xml></xml>
					| Some t' =>
					  return <xml>
					    {test_fn_both_sides2 strlenGe1 t'.T1 False "strlenGe 1"}
					    {test_fn_both_sides2 strlenGe2 t'.T2 True "strlenGe 2"}
					    {test_fn_both_sides2 strlenGe3 t'.T3 False "strlenGe 3"}
					    {test_fn_both_sides2 strlenGe4 t'.T4 True "strlenGe 4"}
					    {test_fn_both_sides2 strlenGe5 t'.T5 True "strlenGe 5"}
					    {test_fn_both_sides2 strlenGe6 t'.T6 False "strlenGe 6"}
					    {test_fn_both_sides2 strlenGe7 t'.T7 True "strlenGe 7"}
					    {test_fn_both_sides2 strlenGe8 t'.T8 True "strlenGe 8"}    
					  </xml>} />
						  </body>
    </xml>

type clen = { S : string, L : int }

val clen_eq : eq clen = mkEq (fn a b =>
			      a.S = b.S && a.L = b.L)

val clen_show : show clen = mkShow (fn a =>
				   "{S = " ^ a.S ^ ", L = " ^ (show a.L) ^ "}")
(* strcat *)

fun teststrcat a b = let val c = strcat a b in {S = c, L = strlen c} end
fun teststrcat1 _ = teststrcat "" ""
fun teststrcat2 _ = teststrcat "aa" "bb"
fun teststrcat3 _ = teststrcat "" "bb"
fun teststrcat4 _ = teststrcat "aa" ""
fun teststrcat5 _ = teststrcat "àà" "áá"
fun teststrcat6 _ = teststrcat "" "áá"
fun teststrcat7 _ = teststrcat "àà" ""
fun teststrcat8 _ = teststrcat "函數" "ãã"
fun teststrcat9 _ = teststrcat "ç" "ã"
fun teststrcat10 _ = teststrcat (show (strsub "ç" 0)) (show (strsub "ã" 0))
fun teststrcat11 _ = teststrcat (show (chr 231)) (show (chr 227))

fun strcatsserver () =
    return {
    T1 = teststrcat1 (),
    T2 = teststrcat2 (),
    T3 = teststrcat3 (),
    T4 = teststrcat4 (),
    T5 = teststrcat5 (),
    T6 = teststrcat6 (),
    T7 = teststrcat7 (),
    T8 = teststrcat8 (),
    T9 = teststrcat9 (),
    T10 = teststrcat10 (),
    T11 = teststrcat11 ()   
    }
		     
fun strcats () : transaction page =
    t <- source None;
    return <xml>
      <body onload={r <- rpc (strcatsserver ());
		    set t (Some r);
		    return ()}>
	<dyn signal={r <- signal t; case r of None => return <xml></xml>
					    | Some t' => return <xml>
					      {test_fn_both_sides2 teststrcat1 t'.T1 {S="",L=0} "strcat 1" }
					      {test_fn_both_sides2 teststrcat2 t'.T2 {S="aabb",L=4} "strcat 2" }
					      {test_fn_both_sides2 teststrcat3 t'.T3 {S="bb",L=2} "strcat 3" }
					      {test_fn_both_sides2 teststrcat4 t'.T4 {S="aa",L=2} "strcat 4" }
					      {test_fn_both_sides2 teststrcat5 t'.T5 {S="ààáá",L=4} "strcat 5" }
					      {test_fn_both_sides2 teststrcat6 t'.T6 {S="áá",L=2} "strcat 6" }
					      {test_fn_both_sides2 teststrcat7 t'.T7 {S="àà",L=2} "strcat 7" }
					      {test_fn_both_sides2 teststrcat8 t'.T8 {S="函數ãã",L=4} "strcat 8" }
					      {test_fn_both_sides2 teststrcat9 t'.T9 {S="çã",L=2} "strcat 9" }
					      {test_fn_both_sides2 teststrcat10 t'.T10 {S="çã",L=2} "strcat 10" }
					      {test_fn_both_sides2 teststrcat11 t'.T11 {S="çã",L=2} "strcat 11" }
					    </xml>} />
			</body>
      </xml>

(* strsubs *)

fun strsub1 _ = strsub "abàç" 0
fun strsub2 _ = strsub "abàç" 1
fun strsub3 _ = strsub "àb" 0
fun strsub4 _ = strsub "abàç" 2
fun strsub5 _ = strsub "abàç" 3

fun strsubsserver _ = return {
		      T1 = strsub1 (),
		      T2 = strsub2 (),
		      T3 = strsub3 (),
		      T4 = strsub4 (),
		      T5 = strsub5 ()
		      }
		
fun strsubs () : transaction page =
    t <- source None;
    return <xml>
      <body onload={r <- rpc (strsubsserver ());
		    set t (Some r);
		    return ()}>
	<dyn signal={r <- signal t; case r of None => return <xml></xml>
					    | Some t' => return <xml>
					      	{test_fn_both_sides2 strsub1 t'.T1 #"a" "strsub 1"}
						{test_fn_both_sides2 strsub2 t'.T2 #"b" "strsub 2"}
						{test_fn_both_sides2 strsub3 t'.T3 (strsub "à" 0) "strsub 3"}
						{test_fn_both_sides2 strsub4 t'.T4 (strsub "à" 0) "strsub 4"}
						{test_fn_both_sides2 strsub5 t'.T5 (strsub "ç" 0) "strsub 5"}
					      </xml>
					      } />

      </body>
	</xml>

(* strsuffixs *)
fun strsuffix1 _ = strsuffix "abàç" 0
fun strsuffix2 _ = strsuffix "abàç" 1
fun strsuffix3 _ = strsuffix "abàç" 2
fun strsuffix4 _ = strsuffix "abàç" 3

fun strsuffixsserver _ =
    return {
    T1 = strsuffix1 (),
    T2 = strsuffix2 (),
    T3 = strsuffix3 (),
    T4 = strsuffix4 ()
    }
		   
fun strsuffixs () : transaction page =
    t <- source None;
    return <xml>
      <body  onload={r <- rpc (strsuffixsserver ());
		    set t (Some r);
		     return ()}>
		<dyn signal={r <- signal t; case r of None => return <xml></xml>
					    | Some t' => return <xml>
					      		{test_fn_both_sides2 strsuffix1 t'.T1 "abàç" "strsuffix 1"}
							{test_fn_both_sides2 strsuffix2 t'.T2 "bàç" "strsuffix 2"}
							{test_fn_both_sides2 strsuffix3 t'.T3 "àç" "strsuffix 3"}
							{test_fn_both_sides2 strsuffix4 t'.T4 "ç" "strsuffix 4"}
					      </xml>
					      } />

      </body>
    </xml>

(* strchrs *)

fun strchr1 _ = strchr "abàç" #"c"
fun strchr2 _ = strchr "abàç" #"a"
fun strchr3 _ = strchr "abàç" #"b"
fun strchr4 _ = strchr "abàç" (strsub "à" 0)
fun strchr5 _ = strchr "abàç" (strsub "ç" 0)

fun strchrssserver _ =
    return {
    T1 = strchr1 (),
    T2 = strchr2 (),
    T3 = strchr3 (),
    T4 = strchr4 (),
    T5 = strchr5 ()
    }
		
fun strchrs () : transaction page =
    t <- source None;
    return <xml>
      <body onload={r <- rpc (strchrssserver ());
		    set t (Some r);
		    return ()}>
	<dyn signal={r <- signal t; case r of None => return <xml></xml>
					    | Some t' => return <xml>
					      {test_fn_both_sides2 strchr1 t'.T1 None "strchr 1"}
					      {test_fn_both_sides2 strchr2 t'.T2 (Some "abàç") "strchr 2"}
					      {test_fn_both_sides2 strchr3 t'.T3 (Some "bàç") "strchr 3"}
					      {test_fn_both_sides2 strchr4 t'.T4 (Some "àç") "strchr 4"}
					      {test_fn_both_sides2 strchr5 t'.T5 (Some "ç") "strchr 5"}
					      </xml>
					      } />
	    
      </body>
	</xml>

(* strindexs *)
fun strindex1 _ = strindex "abàç" #"c"
fun strindex2 _ = strindex "abàç" #"a"
fun strindex3 _ = strindex "abàç" #"b"
fun strindex4 _ = strindex "abàç" (strsub "à" 0)
fun strindex5 _ = strindex "abàç" (strsub "ç" 0)

fun strindexsserver _ =
    return {
    T1 = strindex1 (),
    T2 = strindex2 (),
    T3 = strindex3 (),
    T4 = strindex4 (),
    T5 = strindex5 ()
    }
		  
fun strindexs () : transaction page =
    t <- source None;
    return <xml>
      <body onload={r <- rpc (strindexsserver ());
		    set t (Some r);
		    return ()}>
		<dyn signal={r <- signal t; case r of None => return <xml></xml>
					    | Some t' => return <xml>
					      	{test_fn_both_sides2 strindex1 t'.T1 None "strindex 1"}
						{test_fn_both_sides2 strindex2 t'.T2 (Some 0) "strindex 2"}
						{test_fn_both_sides2 strindex3 t'.T3 (Some 1) "strindex 3"}
						{test_fn_both_sides2 strindex4 t'.T4 (Some 2) "strindex 4"}
						{test_fn_both_sides2 strindex5 t'.T5 (Some 3) "strindex 5"}
					      </xml>
					      } />
	
      </body>
    </xml>

(*strsindexs*)
fun strsindex1 _ = strsindex "abàç" ""
fun strsindex2 _ = strsindex "abàç" "abàç"
fun strsindex3 _ = strsindex "abàç" "abàc"
fun strsindex4 _ = strsindex "abàç" "bàç"
fun strsindex5 _ = strsindex "abàç" "bàc"
fun strsindex6 _ = strsindex "abàç" "àç"
fun strsindex7 _ = strsindex "abàç" "àc"
fun strsindex8 _ = strsindex "abàç" "ç"
fun strsindex9 _ = strsindex "abàç" "c"

fun strsindexsserver _ =
    return {
    T1 = strsindex1 (),
    T2 = strsindex2 (),
    T3 = strsindex3 (),
    T4 = strsindex4 (),
    T5 = strsindex5 (),
    T6 = strsindex6 (),
    T7 = strsindex7 (),
    T8 = strsindex8 (),
    T9 = strsindex9 ()
    }
    
fun strsindexs () : transaction page =
    t <- source None;
    return <xml>
      <body onload={r <- rpc (strsindexsserver ());
		    set t (Some r);
		    return ()}>
		<dyn signal={r <- signal t; case r of None => return <xml></xml>
					    | Some t' => return <xml>
					      		{test_fn_both_sides2 strsindex1 t'.T1 (Some 0) "strsindex 1"}
							{test_fn_both_sides2 strsindex2 t'.T2 (Some 0) "strsindex 2"}
							{test_fn_both_sides2 strsindex3 t'.T3 None "strsindex 3"}
							{test_fn_both_sides2 strsindex4 t'.T4 (Some 1) "strsindex 4"}
							{test_fn_both_sides2 strsindex5 t'.T5 None "strsindex 5"}
							{test_fn_both_sides2 strsindex6 t'.T6 (Some 2) "strsindex 6"}
							{test_fn_both_sides2 strsindex7 t'.T7 None "strsindex 7"}
							{test_fn_both_sides2 strsindex8 t'.T8 (Some 3) "strsindex 8"}
							{test_fn_both_sides2 strsindex9 t'.T9 None "strsindex 9"}
					      </xml>
					      } />

      </body>
		</xml>

(*strcspns*)
	
fun strcspns () : transaction page =
    return <xml>
      <body>
	{test_fn_both_sides (fn _ => strcspn "abàç" "") 4 "strcspn 1"}
	{test_fn_both_sides (fn _ => strcspn "abàç" "abàç") 0 "strcspn 2"}
	{test_fn_both_sides (fn _ => strcspn "abàç" "a") 0 "strcspn 3"}
	{test_fn_both_sides (fn _ => strcspn "abàç" "bàç") 1 "strcspn 4"}
	{test_fn_both_sides (fn _ => strcspn "abàç" "àç") 2 "strcspn 5"}
	{test_fn_both_sides (fn _ => strcspn "abàç" "ç") 3 "strcspn 6"}	
      </body>
      </xml>

fun str1s () : transaction page = return <xml>
  <body>
    {test_fn_both_sides (fn _ => str1 #"a") "a" "str1 1"}
    {test_fn_both_sides (fn _ => str1 (strsub "à" 0)) "à" "str1 2"}
    {test_fn_both_sides (fn _ => str1 (strsub "aá" 1)) "á" "str1 3"}    
  </body>
  </xml>

fun isalnums () : transaction page = return <xml>
  <body>
    {test_fn_both_sides (fn _ => isalnum #"a") True "isalnum 1"}
    {test_fn_both_sides (fn _ => isalnum #"a") True "isalnum 2"}
    {test_fn_both_sides (fn _ => isalnum (strsub "à" 0)) True "isalnum 3"}
    {test_fn_both_sides (fn _ => isalnum #"A") True "isalnum 4"}
    {test_fn_both_sides (fn _ => isalnum (strsub "À" 0)) True "isalnum 5"}
    {test_fn_both_sides (fn _ => isalnum #"1") True "isalnum 6"}
    {test_fn_both_sides (fn _ => not (isalnum #"!")) True "isalnum 7"}
    {test_fn_both_sides (fn _ => not (isalnum #"#")) True "isalnum 8"}
    {test_fn_both_sides (fn _ => not (isalnum #" ")) True "isalnum 9"}
  </body>
</xml>

fun isalphas () : transaction page = return <xml>
  <body>
    {test_fn_both_sides (fn _ => isalpha #"a") True "isalpha 1"}
    {test_fn_both_sides (fn _ => isalpha (strsub "à" 0)) True "isalpha 2"}
    {test_fn_both_sides (fn _ => isalpha #"A") True "isalpha 3"}
    {test_fn_both_sides (fn _ => isalpha (strsub "À" 0)) True "isalpha 4"}
    {test_fn_both_sides (fn _ => not (isalpha #"1")) True "isalpha 5"}
    {test_fn_both_sides (fn _ => not (isalpha #"!")) True "isalpha 6"}
    {test_fn_both_sides (fn _ => not (isalpha #"#")) True "isalpha 7"}
    {test_fn_both_sides (fn _ => not (isalpha #" ")) True "isalpha 8"}
  </body>
</xml>

fun isblanks () : transaction page = 
    return <xml>
      <body>
	{test_fn_both_sides (fn _ => not (isblank #"a")) True "isblank 1"}
	{test_fn_both_sides (fn _ => not (isblank (strsub "à" 0))) True "isblank 2"}
	{test_fn_both_sides (fn _ => not (isblank #"A")) True "isblank 3"}
	{test_fn_both_sides (fn _ => not (isblank (strsub "À" 0))) True "isblank 4"}
	{test_fn_both_sides (fn _ => not (isblank #"1")) True "isblank 5"}
	{test_fn_both_sides (fn _ => not (isblank #"!")) True "isblank 6"}
	{test_fn_both_sides (fn _ => not (isblank #"#")) True "isblank 7"}
	{test_fn_both_sides (fn _ => isblank #" ") True "isblank 8"}
	{test_fn_both_sides (fn _ => isblank #"\t") True "isblank 9"}
	{test_fn_both_sides (fn _ => not (isblank #"\n")) True "isblank 10"}
      </body>
    </xml>

fun iscntrls () : transaction page =
    return <xml>
      <body>
	{test_fn_sside (fn _ => not (iscntrl #"a")) True "iscntrl 1"}
	{test_fn_sside (fn _ => not (iscntrl (strsub "à" 0))) True "iscntrl 2"}
	{test_fn_sside (fn _ => not (iscntrl #"A")) True "iscntrl 3"}
	{test_fn_sside (fn _ => not (iscntrl (strsub "À" 0))) True "iscntrl 4"}
	{test_fn_sside (fn _ => not (iscntrl #"1")) True "iscntrl 5"}
	{test_fn_sside (fn _ => not (iscntrl #"!")) True "iscntrl 6"}
	{test_fn_sside (fn _ => not (iscntrl #"#")) True "iscntrl 7"}
	{test_fn_sside (fn _ => not (iscntrl #" ")) True "iscntrl 8"}
	{test_fn_sside (fn _ => iscntrl #"\t") True "iscntrl 9"}
	{test_fn_sside (fn _ => iscntrl #"\n") True "iscntrl 10"}
      </body>
      </xml>

fun isdigits () : transaction page =
    return <xml>
      <body>
	{test_fn_both_sides (fn _ => not (isdigit #"a")) True "isdigit 1"}
	{test_fn_both_sides (fn _ => not (isdigit (strsub "à" 0))) True "isdigit 2"}
	{test_fn_both_sides (fn _ => not (isdigit #"A")) True "isdigit 3"}
	{test_fn_both_sides (fn _ => not (isdigit (strsub "À" 0))) True "isdigit 4"}
	{test_fn_both_sides (fn _ => isdigit #"1") True "isdigit 5"}
	{test_fn_both_sides (fn _ => not (isdigit #"!")) True "isdigit 6"}
	{test_fn_both_sides (fn _ => not (isdigit #"#")) True "isdigit 7"}
	{test_fn_both_sides (fn _ => not (isdigit #" ")) True "isdigit 8"}
	{test_fn_both_sides (fn _ => not (isdigit #"\t")) True "isdigit 9"}
	{test_fn_both_sides (fn _ => not (isdigit #"\n")) True "isdigit 10"}
      </body>
    </xml>

fun isgraphs () : transaction page =
    return <xml>
      <body>
	{test_fn_sside (fn _ => isgraph #"a") True "isgraph 1"}
	{test_fn_sside (fn _ => isgraph (strsub "à" 0)) True "isgraph 2"}
	{test_fn_sside (fn _ => isgraph #"A") True "isgraph 3"}
	{test_fn_sside (fn _ => isgraph (strsub "À" 0)) True "isgraph 4"}
	{test_fn_sside (fn _ => isgraph #"1") True "isgraph 5"}
	{test_fn_sside (fn _ => isgraph #"!") True "isgraph 6"}
	{test_fn_sside (fn _ => isgraph #"#") True "isgraph 7"}
	{test_fn_sside (fn _ => not (isgraph #" ")) True "isgraph 8"}
	{test_fn_sside (fn _ => not (isgraph #"\t")) True "isgraph 9"}
	{test_fn_sside (fn _ => not (isdigit #"\n")) True "isgraph 10"}
      </body>
    </xml>

fun islowers () : transaction page =
    return <xml>
      <body>
	{test_fn_both_sides (fn _ => islower #"a") True "islower 1"}
	{test_fn_both_sides (fn _ => islower (strsub "à" 0)) True "islower 2"}
	{test_fn_both_sides (fn _ => not (islower #"A")) True "islower 3"}
	{test_fn_both_sides (fn _ => not (islower (strsub "À" 0))) True "islower 4"}
	{test_fn_both_sides (fn _ => not (islower #"1")) True "islower 5"}
	{test_fn_both_sides (fn _ => not (islower #"!")) True "islower 6"}
	{test_fn_both_sides (fn _ => not (islower #"#")) True "islower 7"}
	{test_fn_both_sides (fn _ => not (islower #" ")) True "islower 8"}
	{test_fn_both_sides (fn _ => not (islower #"\t")) True "islower 9"}
	{test_fn_both_sides (fn _ => not (islower #"\n")) True "islower 10"}
      </body>
      </xml>

fun isprints () : transaction page =
    return <xml>
      <body>
	{test_fn_both_sides (fn _ => isprint #"a") True "isprint 1"}
	{test_fn_both_sides (fn _ => isprint (strsub "à" 0)) True "isprint 2"}
	{test_fn_both_sides (fn _ => isprint #"A") True "isprint 3"}
	{test_fn_both_sides (fn _ => isprint (strsub "À" 0)) True "isprint 4"}
	{test_fn_both_sides (fn _ => isprint #"1") True "isprint 5"}
	{test_fn_both_sides (fn _ => isprint #"!") True "isprint 6"}
	{test_fn_both_sides (fn _ => isprint #"#") True "isprint 7"}
	{test_fn_both_sides (fn _ => isprint #" ") True "isprint 8"}
	{test_fn_both_sides (fn _ => not (isprint #"\t")) True "isprint 9"}
	{test_fn_both_sides (fn _ => not (isprint #"\n")) True "isprint 10"}
      </body>
      </xml>

fun ispuncts () : transaction page =
    return <xml>
      <body>
	{test_fn_sside (fn _ => not (ispunct #"a")) True "ispunct 1"}
	{test_fn_sside (fn _ => not (ispunct (strsub "à" 0))) True "ispunct 2"}
	{test_fn_sside (fn _ => not (ispunct #"A")) True "ispunct 3"}
	{test_fn_sside (fn _ => not (ispunct (strsub "À" 0))) True "ispunct 4"}
	{test_fn_sside (fn _ => not (ispunct #"1")) True "ispunct 5"}
	{test_fn_sside (fn _ => ispunct #"!") True "ispunct 6"}
	{test_fn_sside (fn _ => ispunct #"#") True "ispunct 7"}
	{test_fn_sside (fn _ => not (ispunct #" ")) True "ispunct 8"}
	{test_fn_sside (fn _ => not (isprint #"\t")) True "ispunct 9"}
	{test_fn_sside (fn _ => not (isprint #"\n")) True "ispunct 10"}
      </body>
      </xml>

fun isspaces () : transaction page =
    return <xml>
      <body>
	{test_fn_both_sides (fn _ => not (isspace #"a")) True "isspace 1"}
	{test_fn_both_sides (fn _ => not (isspace (strsub "à" 0))) True "isspace 2"}
	{test_fn_both_sides (fn _ => not (isspace #"A")) True "isspace 3"}
	{test_fn_both_sides (fn _ => not (isspace (strsub "À" 0))) True "isspace 4"}
	{test_fn_both_sides (fn _ => not (isspace #"1")) True "isspace 5"}
	{test_fn_both_sides (fn _ => not (isspace #"!")) True "isspace 6"}
	{test_fn_both_sides (fn _ => not (isspace #"#")) True "isspace 7"}
	{test_fn_both_sides (fn _ => isspace #" ") True "isspace 8"}
	{test_fn_both_sides (fn _ => isspace #"\t") True "isspace 9"}
	{test_fn_both_sides (fn _ => isspace #"\n") True "isspace 10"}
      </body>
    </xml>
    
fun isuppers () : transaction page =
    return <xml>
      <body>
	{test_fn_both_sides (fn _ => not (isupper #"a")) True "isupper 1"}
	{test_fn_both_sides (fn _ => not (isupper (strsub "à" 0))) True "isupper 2"}
	{test_fn_both_sides (fn _ => isupper #"A") True "isupper 3"}
	{test_fn_both_sides (fn _ => isupper (strsub "À" 0)) True "isupper 4"}
	{test_fn_both_sides (fn _ => not (isupper #"1")) True "isupper 5"}
	{test_fn_both_sides (fn _ => not (isupper #"!")) True "isupper 6"}
	{test_fn_both_sides (fn _ => not (isupper #"#")) True "isupper 7"}
	{test_fn_both_sides (fn _ => not (isupper #" ")) True "isupper 8"}
	{test_fn_both_sides (fn _ => not (isupper #"\t")) True "isupper 9"}
	{test_fn_both_sides (fn _ => not (isupper #"\n")) True "isupper 10"}
      </body>
      </xml>

fun isxdigits () : transaction page =
    return <xml>
      <body>
	{test_fn_both_sides (fn _ => isxdigit #"a") True "isxdigit 1"}
	{test_fn_both_sides (fn _ => not (isxdigit (strsub "à" 0))) True "isxdigit 2"}
	{test_fn_both_sides (fn _ => isxdigit #"A") True "isxdigit 3"}
	{test_fn_both_sides (fn _ => not (isxdigit (strsub "À" 0))) True "isxdigit 4"}
	{test_fn_both_sides (fn _ => isxdigit #"1") True "isxdigit 5"}
	{test_fn_both_sides (fn _ => not (isxdigit #"!")) True "isxdigit 6"}
	{test_fn_both_sides (fn _ => not (isxdigit #"#")) True "isxdigit 7"}
	{test_fn_both_sides (fn _ => not (isxdigit #" ")) True "isxdigit 8"}
	{test_fn_both_sides (fn _ => not (isxdigit #"\t")) True "isxdigit 9"}
	{test_fn_both_sides (fn _ => not (isxdigit #"\n")) True "isxdigit 10"}
      </body>
      </xml>

fun tolowers () : transaction page =
    let
	fun lower_of a _ =
	    tolower a
    in
	return <xml>
	  <body>
	    {test_fn_both_sides (lower_of #"A") #"a" "tolower 1"}
	    {test_fn_both_sides (lower_of #"a") #"a" "tolower 2"}
	    {test_fn_both_sides (lower_of (strsub "á" 0)) (strsub "á" 0) "tolower 3"}
	    {test_fn_both_sides (lower_of (strsub "Á" 0)) (strsub "á" 0) "tolower 4"}
	    {test_fn_both_sides (lower_of #"1") #"1" "tolower 5"}
	    {test_fn_cside (lower_of (strsub "ß" 0)) (lower_of (strsub "ß" 0) ()) "tolower 6"}
	  </body>
	</xml>
    end
    
fun touppers () : transaction page =
    let
	fun upper_of a _ =
	    toupper a
    in
	return <xml>
	  <body>
	    {test_fn_both_sides (upper_of #"A") #"A" "toupper 1"}
	    {test_fn_both_sides (upper_of #"a") #"A" "toupper 2"}
	    {test_fn_both_sides (upper_of (strsub "á" 0)) (strsub "Á" 0) "toupper 3"}
	    {test_fn_both_sides (upper_of (strsub "Á" 0)) (strsub "Á" 0) "toupper 4"}
	    {test_fn_both_sides (upper_of #"1") #"1" "toupper 5"}
	    
	    {test_fn_cside (upper_of (strsub "ß" 0)) (upper_of (strsub "ß" 0) ()) "toupper 6"}
	  </body>
	</xml>
    end
    
fun ord_and_chrs () : transaction page =
    return <xml>
      <body>
	{test_fn_both_sides (fn _ => chr (ord #"A")) #"A" "ord => chr 1"}
	{test_fn_both_sides (fn _ => chr (ord #"a")) #"a" "ord => chr 2"}
	{test_fn_both_sides (fn _ => chr (ord (strsub "á" 0))) (strsub "á" 0) "ord => chr 3"}
	{test_fn_both_sides (fn _ => chr (ord (strsub "Á" 0))) (strsub "Á" 0) "ord => chr 4"}
	{test_fn_both_sides (fn _ => chr (ord #"1")) #"1" "ord => chr 5"}
	{test_fn_both_sides (fn _ => chr (ord #"\n")) #"\n" "ord => chr 6"}
	{test_fn_both_sides (fn _ => chr (ord (strsub "が" 0))) (strsub "が" 0) "ord => chr 7"}
	{test_fn_both_sides (fn _ => chr (ord (strsub "漢" 0))) (strsub "漢" 0) "ord => chr 8"}
	{test_fn_both_sides (fn _ => chr (ord (strsub "カ" 0))) (strsub "カ" 0) "ord => chr 9"}	
      </body>
    </xml>

fun test_ords () : transaction page =
    let
	fun ord_of c _ =
	    ord c
    in
	return <xml>
	  <body>
	    {test_fn_cside (ord_of (strsub "a" 0)) (ord_of (strsub "a" 0) ()) "test ord 1"}
	    {test_fn_cside (ord_of (strsub "á" 0)) (ord_of (strsub "á" 0) ()) "test ord 2"}
	    {test_fn_cside (ord_of (strsub "5" 0)) (ord_of (strsub "5" 0) ()) "test ord 3"}
	    {test_fn_cside (ord_of (strsub "が" 0)) (ord_of (strsub "が" 0) ()) "test ord 4"}
	    {test_fn_cside (ord_of (strsub "漢" 0)) (ord_of (strsub "漢" 0) ()) "test ord 5"}
	    {test_fn_cside (ord_of (strsub "カ" 0)) (ord_of (strsub "カ" 0) ()) "test ord 6"}
	  </body>
	</xml>
    end
    
table t : { Id : int, Text : string }

fun test_db () : transaction page =
    let
	val s1 = "abc"
	val s2 = "çãó"
	val s3 = "が"
	val s4 = "漢"
	val s5 = "カ"
	val s6 = "وظيفية"

	fun test_str_and_len n c expS expL =
	    test_fn_both_sides (fn _ => {S = c, L = strlen c}) {S=expS, L=expL} ("test_db " ^ (show n))
		 
    in
    dml (INSERT INTO t (Id, Text) VALUES({[1]}, {[s1]}));
    t1 <- oneRow (SELECT t.Text FROM t WHERE t.Id = 1);

    dml (INSERT INTO t (Id, Text) VALUES({[2]}, {[s2]}));
    t2 <- oneRow (SELECT t.Text FROM t WHERE t.Id = 2);

    dml (INSERT INTO t (Id, Text) VALUES({[3]}, {[s3]}));
    t3 <- oneRow (SELECT t.Text FROM t WHERE t.Id = 3);

    dml (INSERT INTO t (Id, Text) VALUES({[4]}, {[s4]}));
    t4 <- oneRow (SELECT t.Text FROM t WHERE t.Id = 4);

    dml (INSERT INTO t (Id, Text) VALUES({[5]}, {[s5]}));
    t5 <- oneRow (SELECT t.Text FROM t WHERE t.Id = 5);

    dml (INSERT INTO t (Id, Text) VALUES({[6]}, {[s6]}));
    t6 <- oneRow (SELECT t.Text FROM t WHERE t.Id = 6);

    return <xml>
      <body>
	{test_str_and_len 1 t1.T.Text s1 (strlen s1)}
	{test_str_and_len 2 t2.T.Text s2 (strlen s2)}
	{test_str_and_len 3 t3.T.Text s3 (strlen s3)}
	{test_str_and_len 4 t4.T.Text s4 (strlen s4)}
	{test_str_and_len 5 t5.T.Text s5 (strlen s5)}
	{test_str_and_len 6 t6.T.Text s6 (strlen s6)}
      </body>
      </xml>
    end

and ftTolower (minCh : int) (maxCh : int) : transaction page =
    let
	fun test_chr (n : int) : xbody =
	    if iscodepoint n then
		test_fn_cside_ch (fn _ => tolower (chr n)) (tolower (chr n))
				 ("test chr " ^ (show n) ^ " : " ^ (show (chr n)))
	    else
		<xml></xml>
    in
	return <xml>
	  <body>
	    { from_m_upto_n (fn n => test_chr n) minCh maxCh }
	  </body>
	</xml>
    end

and ftToupper (minCh : int) (maxCh : int) : transaction page =
    let
	fun test_chr (n : int) : xbody =
	    if iscodepoint n then
		test_fn_cside_ch (fn _ => toupper (chr n)) (toupper (chr n))
				 ("test chr " ^ (show n) ^ " : " ^ (show (chr n)))
	    else
		<xml></xml>
    in
	return <xml>
	  <body>
	    { from_m_upto_n (fn n => test_chr n) minCh maxCh }
	  </body>
	</xml>
    end

and ftIsalpha (minCh : int) (maxCh : int) : transaction page =
    let
	fun test_chr (n : int) : xbody =
	    if iscodepoint n then
		test_fn_cside_b (fn _ => isalpha (chr n)) (isalpha (chr n))
				 ("test chr " ^ (show n) ^ " : " ^ (show (chr n)))
	    else
		<xml></xml>
    in
	return <xml>
	  <body>
	    { from_m_upto_n (fn n => test_chr n) minCh maxCh }
	  </body>
	</xml>
    end

and ftIsdigit (minCh : int) (maxCh : int) : transaction page =
    let
	fun test_chr (n : int) : xbody =
	    if iscodepoint n then
		test_fn_cside_b (fn _ => isdigit (chr n)) (isdigit (chr n))
				 ("test chr " ^ (show n) ^ " : " ^ (show (chr n)))
	    else
		<xml></xml>
    in
	return <xml>
	  <body>
	    { from_m_upto_n (fn n => test_chr n) minCh maxCh }
	  </body>
	</xml>
    end
    
and ftIsalnum (minCh : int) (maxCh : int) : transaction page =
    let
	fun test_chr (n : int) : xbody =
	    if iscodepoint n then
		test_fn_cside_b (fn _ => isalnum (chr n)) (isalnum (chr n))
				 ("test chr " ^ (show n) ^ " : " ^ (show (chr n)))
	    else
		<xml></xml>
    in
	return <xml>
	  <body>
	    { from_m_upto_n (fn n => test_chr n) minCh maxCh }
	  </body>
	</xml>
    end

and ftIsspace (minCh : int) (maxCh : int) : transaction page =
    let
	fun test_chr (n : int) : xbody =
	    if iscodepoint n then
		test_fn_cside_b (fn _ => isspace (chr n)) (isspace (chr n))
				 ("test chr " ^ (show n) ^ " : " ^ (show (chr n)))
	    else
		<xml></xml>
    in
	return <xml>
	  <body>
	    { from_m_upto_n (fn n => test_chr n) minCh maxCh }
	  </body>
	</xml>
    end

and ftIsblank (minCh : int) (maxCh : int) : transaction page =
    let
	fun test_chr (n : int) : xbody =
	    if iscodepoint n then
		test_fn_cside_b (fn _ => isblank (chr n)) (isblank (chr n))
				 ("test chr " ^ (show n) ^ " : " ^ (show (chr n)))
	    else
		<xml></xml>
    in
	return <xml>
	  <body>
	    { from_m_upto_n (fn n => test_chr n) minCh maxCh }
	  </body>
	</xml>
    end
    
and ftIsprint (minCh : int) (maxCh : int) : transaction page =
    let
	fun test_chr (n : int) : xbody =
	    if iscodepoint n then
		test_fn_cside_b (fn _ => isprint (chr n)) (isprint (chr n))
				 ("test chr " ^ (show n) ^ " : " ^ (show (chr n)))
	    else
		<xml></xml>
    in
	return <xml>
	  <body>
	    { from_m_upto_n (fn n => test_chr n) minCh maxCh }
	  </body>
	</xml>
    end
    
and ftIsxdigit (minCh : int) (maxCh : int) : transaction page =
    let
	fun test_chr (n : int) : xbody =
	    if iscodepoint n then
		test_fn_cside_b (fn _ => isxdigit (chr n)) (isxdigit (chr n))
				 ("test chr " ^ (show n) ^ " : " ^ (show (chr n)))
	    else
		<xml></xml>
    in
	return <xml>
	  <body>
	    { from_m_upto_n (fn n => test_chr n) minCh maxCh }
	  </body>
	</xml>
    end

and ftIsupper (minCh : int) (maxCh : int) : transaction page =
    let
	fun test_chr (n : int) : xbody =
	    if iscodepoint n then
		test_fn_cside_b (fn _ => isupper (chr n)) (isupper (chr n))
				 ("test chr " ^ (show n) ^ " : " ^ (show (chr n)))
	    else
		<xml></xml>
    in
	return <xml>
	  <body>
	    { from_m_upto_n (fn n => test_chr n) minCh maxCh }
	  </body>
	</xml>
    end

and ftIslower (minCh : int) (maxCh : int) : transaction page =
    let
	fun test_chr (n : int) : xbody =
	    if iscodepoint n then
		test_fn_cside_b (fn _ => islower (chr n)) (islower (chr n))
				 ("test chr " ^ (show n) ^ " : " ^ (show (chr n)))
	    else
		<xml></xml>
    in
	return <xml>
	  <body>
	    { from_m_upto_n (fn n => test_chr n) minCh maxCh }
	  </body>
	</xml>
    end
    
fun index () : transaction page =
    return <xml>
      <body>
	<a link={substrings ()}>substrings</a>
	<a link={strlens ()}>strlens</a>
	<a link={strlenGens ()}>strlenGens</a>
	<a link={strcats ()}>strcats</a>
	<a link={strsubs ()}>strsubs</a>
	<a link={strsuffixs ()}>strsuffixs</a>
	<a link={strchrs ()}>strchrs</a>
	<a link={strindexs ()}>strindexs</a>
	<a link={strsindexs ()}>strsindexs</a>
	<a link={strcspns ()}>strcspns</a>
	<a link={str1s ()}>str1s</a>
	<a link={isalnums ()}>isalnums</a>
	<a link={isalphas ()}>isalphas</a>
	<a link={isblanks ()}>isblanks</a>
	<a link={iscntrls ()}>iscntrls</a>
	<a link={isdigits ()}>isdigits</a>
	<a link={isgraphs ()}>isgraphs</a>
	<a link={islowers ()}>islowers</a>
	<a link={isprints ()}>isprints</a>
	<a link={ispuncts ()}>ispuncts</a>
	<a link={isspaces ()}>isspaces</a>
	<a link={isuppers ()}>isuppers</a>
	<a link={isxdigits ()}>isxdigits</a>
	<a link={tolowers ()}>tolowers</a>
	<a link={touppers ()}>touppers</a>
	<a link={ord_and_chrs ()}>ord_and_chrs</a>
	<a link={test_ords ()}>test ord</a>
	<a link={highencode ()}>highencode</a>
	<a link={test_db ()}>test_db</a>
      </body>
      </xml>
