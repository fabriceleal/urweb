table tab : {Id : int, Val : int} PRIMARY KEY Id

fun cache id =
    res <- oneOrNoRows (SELECT tab.Val
                        FROM tab
                        WHERE tab.Id = {[id]});
    return <xml><body>
      Reading {[id]}.
      {case res of
           None => <xml>?</xml>
         | Some row => <xml>{[row.Tab.Val]}</xml>}
    </body></xml>

fun cache2 id v =
    res <- oneOrNoRows (SELECT tab.Val
                        FROM tab
                        WHERE tab.Id = {[id]} AND tab.Val = {[v]});
    return <xml><body>
      Reading {[id]}.
      {case res of
           None => <xml>Nope, that's not it.</xml>
         | Some _ => <xml>Hooray! You guessed it!</xml>}
    </body></xml>

fun flush id =
    dml (UPDATE tab
         SET Val = Val * (Id + 2) / Val - 3
         WHERE Id = {[id]} OR Id = {[id - 1]} OR Id = {[id + 1]});
    return <xml><body>
      Changed {[id]}!
    </body></xml>

val flush17 =
    dml (UPDATE tab
         SET Val = Val * (Id + 2) / Val - 3
         WHERE Id = 17);
    return <xml><body>
      Changed specifically 17!
    </body></xml>

(* fun flush id = *)
(*     res <- oneOrNoRows (SELECT tab.Val *)
(*                         FROM tab *)
(*                         WHERE tab.Id = {[id]}); *)
(*     (case res of *)
(*          None => dml (INSERT INTO tab (Id, Val) *)
(*                       VALUES ({[id]}, 0)) *)
(*        | Some row => dml (UPDATE tab *)
(*                           SET Val = {[row.Tab.Val + 1]} *)
(*                           WHERE Id = {[id]} OR Id = {[id + 1]})); *)
(*     return <xml><body> *)
(*       {case res of *)
(*            None => <xml>Initialized {[id]}!</xml> *)
(*          | Some row => <xml>Incremented {[id]}!</xml>} *)
(*     </body></xml> *)
