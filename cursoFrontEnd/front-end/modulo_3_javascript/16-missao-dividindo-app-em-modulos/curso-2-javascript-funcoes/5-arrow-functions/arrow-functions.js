function guarda_arrow_function_media() {
    const retorna_media = (n1, n2) => {
        let media = ((n1 + n2) / 2);
        return media;
    }
    
    let media = retorna_media(45,5);
    
    console.log("Média: " + media);
}

const media_aluno = (n1, n2) => (n1 + n2) / 2;

console.log("Média: " + media_aluno(8,8));