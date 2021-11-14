cd ./tests/unit
checkfile=`ls | grep ".spec.ts" | tr -s "\n" " "`
jest --findRelatedTests $checkfile