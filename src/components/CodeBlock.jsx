import React from "react";

const CodeBlock = ({ code }) => (
  <div className="bg-slate-950 p-4 rounded-lg border border-slate-700 font-mono text-sm text-green-400 overflow-x-auto my-4 shadow-inner">
    <pre>{code}</pre>
  </div>
);

export default CodeBlock;
