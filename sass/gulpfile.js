var gulp = require("gulp"), //Подключаем Gulp
    sass = require("gulp-sass"), // Подключаем SASS пакет
    browserSync = require("browser-sync"); // подключаем Browser Sync

gulp.task("scss", function(){//создаем таск "sass"
  return gulp.src("app/sass/**/*.scss")//берем все scss файлы из папки sass и дочерных, если такие будут
  .pipe(sass())//преобразуем sass в css посредством gulp-sass
  .pipe(gulp.dest("app/css"))//выгружаем результат в папку app/css
  .pipe(browserSync.reload({stream:true}))//обновляем CSS на странице при изменении
});
//===========
gulp.task("watch",["scss", "browser-sync"], function(){//создаем таск "watch"
  gulp.watch("app/sass/**/*.scss", ["scss"]);//наблюдение за scss файлами и при сохранении выполнение таска "scss"
    gulp.watch("app/*.html", browserSync.reload);//наблюдение за HTML файлами в корне проекта
    gulp.watch("app/js/**/*.js", browserSync.reload);//наблюдение за js файлами 
});
//===========
gulp.task("browser-sync", function(){//создаем таск "browser-sync"
  browserSync({//выполняем browser Sync
    server:{//определяем параметры сервера
      baseDir: "app"//директория для сервера - app
    }
    // notify: false //отключаем уведомления
  });
});
//===========
//Определение задачи по умолчанию в GULP
gulp.task("default", function() {
    console.log("=== I worker ===");
})