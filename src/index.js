const sensitiveWords = (content , words)=>(
    content.replace(
        new RegExp(words.join('|'),"ig"),"***"
    )
);

export default sensitiveWords;