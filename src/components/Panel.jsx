import React from 'react';
export default function Panel({number,title,tag,children,className=''}){return <section className={`panel ${className}`}><div className="panel-heading"><h2><span className="index">{number}</span>{title}</h2>{tag&&<span className="micro">{tag}</span>}</div>{children}</section>}
