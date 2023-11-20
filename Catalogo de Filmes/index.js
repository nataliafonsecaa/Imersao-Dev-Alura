var listaFilmes = [

'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg' , 'https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w' , 'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_FMjpg_UX1000_.jpg', 'https://m.media-amazon.com/images/M/MV5BNWYwODRlYjgtODUxNy00YmMyLWE3NWYtNTYzZmUwNDJiZGVlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg' , 'https://i.pinimg.com/originals/c6/cb/45/c6cb45c2e90e098f045fff121a37e324.jpg' , 'https://www.themoviedb.org/t/p/original/n3M4PWlLddJGLnIcbPUu0LoiDnu.jpg' , 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a34b4a223be118c6451964a197e39ce0d23c80e9b5c678c164da2ef478cf73f8._RI_TTW_.jpg' , 'https://br.web.img3.acsta.net/medias/nmedia/18/92/54/67/20507576.jpg' ]


for (var i =0; i<listaFilmes.length; i=i+1) {
	document.write('<img src= ' +  listaFilmes[i] + '>' );
}
