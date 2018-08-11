# webkit2png http://google.com/            # screengrab google
# webkit2png -W 1000 -H 1000 http://google.com/ # bigger screengrab of google
# webkit2png -T http://google.com/         # just the thumbnail screengrab
# webkit2png -TF http://google.com/        # just thumbnail and fullsize grab
# webkit2png -o foo http://google.com/     # save images as "foo-thumb.png" etc
# webkit2png -                             # screengrab urls from stdin
# webkit2png /path/to/file.html            # screengrab local html file
# webkit2png -h | less                     # full documentation

set -x
webkit2png -W 500 -H 1000 -o shots https://crowdlingo.github.io/course/speaking/movies.html