/**
 * -------------------------------
 * STEP 3. IMPORT USECONTEXT HOOK
 * -------------------------------
 */
import { useContext } from "react";
/**
 * -----------------------
 * STEP 4. IMPORT CONTEXT
 * -----------------------
 */
import LastNameContext from "../contexts/LastNameContext";

import Child from "./Child";
/**
 * -------------------------
 * STEP 5. CONSUME THE DATA
 * -------------------------
 */
export default function Parent() {
  const lastName = useContext(LastNameContext);
  return (
    <div className="parent">
      <h1>{lastName}</h1>
      <Child />
    </div>
  );
}
