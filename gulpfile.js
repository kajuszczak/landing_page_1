const distDir = "./docs"
const srcDir = '.'

const path = {
    build: {
        html: `${distDir}/`,
        css: `${distDir}/css/`,
        js: `${distDir}/js/`,
        img: `${distDir}/img/`,
        
    },
    src: {
        html: `${srcDir}/*.html`,
        css: `${srcDir}/assets/scss/main.scss`,
        js: `${srcDir}/js/index.js`,
        img: `${srcDir}/assets/img/**/*.+(png|jpg|svg|gif|ico|webp)`,
        
    },
    watch: {
        html: `${srcDir}/**/*.html`,
        css: `${srcDir}/assets/scss/**/*.scss`,
        js: `${srcDir}/js/**/*.js`,
        img: `${srcDir}/assets/img/**/*.+(png|jpg|svg|gif|ico|webp)`,
    },
    clean: `./${distDir}/`

}

const { src, dest } = require('gulp')
const gulp = require('gulp')
const webpack = require('webpack-stream')
const browserSync = require('browser-sync').create()
const del = require('del')
const scss = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')
const imageMin = require('gulp-imagemin')



function browsersync() {
    browserSync.init({
        server: {
            baseDir: `./${distDir}/`
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(dest(path.build.html))
        .pipe(browserSync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'index.js'
            },
            watch: false,
            devtool: "source-map",
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]
                            ]
                        }
                    }
                }]
            }
        }))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 5 versions'],
                cascade: true
            }))
        
        .pipe(cleanCss())
        .pipe(
            rename({
                extname: '.min.css'
            }))
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(imageMin([
            imageMin.gifsicle({ interlaced: true }),
            imageMin.mozjpeg({ progressive: true }),
            imageMin.optipng({ optimizationLevel: 3 }),
            imageMin.svgo({
                plugins: [
                    { removeViewBox: false }
                ]
            })
        ]))
        .pipe(dest(path.build.img))
        .pipe(browserSync.stream())
}

function watchFiles() {
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.js], js)
    gulp.watch([path.watch.img], images)
}

function clean() {
    return del(path.clean)
}

gulp.task("build-prod-js", () => {
    return gulp.src(path.src.js)
        .pipe(webpack({
            mode: 'production',
            output: {
                filename: 'script.js'
            },
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]
                            ]
                        }
                    }
                }]
            }
        }))
        .pipe(gulp.dest(path.build.js));
});

const build = gulp.series(clean, gulp.parallel(js, css, html, images))
const watch = gulp.parallel(build, watchFiles, browsersync)
const clear = gulp.series(clean)

exports.img = images
exports.js = js
exports.scss = scss
exports.html = html
exports.build = build
exports.watch = watch
exports.default = watch
exports.clear = clear
