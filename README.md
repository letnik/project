# project

>> TERMINAL

    mkdir hello
    cd hello
    touch hello.html

$ cat hello.html
        <html>
        <head>
        </head>
        <body>
            <h1>Hello, World!</h1>
        </body>
        </html>
    

    mkdir lib    

    ls -C .git

    pwd


>> MAC OS

    Command (⌘) + Shift (⇧) + N     Новая пустая папка в Finder создается комбинацией 
    ⌘Cmd + ⌥Option (Alt) + Esc      диспетчер задач


>> GIT

    Щоб налаштувати початкову назву гілки для використання у всіх ваших нових сховищах, що пригніть це попередження, викличте: git config --global init.defaultBranch <ім’я>

    The just-created branch can be renamed via this command: git branch -m <name>

    git init

    git config --local user.name "My Name"


    git add  <file>
    git commit -m "First Commit"
    git status
    git reset
    git log
    git log --pretty=oneline
    git log --author=alex

    git log --pretty=oneline --all
    git log --pretty=oneline --all --graph
    git log --pretty=oneline --max-count=2
    git checkout <hash>
        $ git checkout 278f0235acdeb3ce705ebb4ba979a39618bc4f39
        $ git checkout main

            ; можна провірити файл
            $ cat hello.html

    git tag v1
    git checkout v1^
    git checkout v1
    git tag
    
    git revert HEAD --no-edit   ; відкатити if $ git add  <file> & $ git commit
    git restore --staged <file>  ; відкатити if $ git add  <file> 
    git checkout  <file>    ; відкатити

    

    git reset --hard v1 ; скидаєм всі коміти до тегу v1
    git reset --hard d3aaf3725086cb6224b4ee11379508f982c93a17
        git log --pretty=oneline --all ; тут полюбому коміт є
        

    git tag -d <tag_name> ; видалення тегу дозволяє повністю підчистити коміт, після попереднього кроку

    git commit --amend -m "Add an author/email comment" ; Змініть попередній коміт

    mkdir lib
    git mv hello.html lib ; перенесли і відразу ніби зробили add

    cat .git/config

    git log --pretty=oneline --max-count=1 ;Пошук останнього коміту
    git cat-file -t <hash> ; вивід останнього коментаря
    git cat-file -p <hash>    ; вивід останнього коментаря
    git cat-file -p <treehash>    ; пошук дерева
    git cat-file -p 


    ; >> Створення гілки

    git checkout -b <name> ; створити гілку та перейти на неї
        ; or
        $ git branch <name>
        $ git checkout <name>

    ; >> Навігація по гілках

    ; >> злиття гілок 

    git checkout style
    git merge --no-edit main
    git log --pretty=oneline --all --graph
    ; or
    git rebase main  
    


    git clone <name> <clone_name>

    git fetch
    git merge origin/main

    git pull

    qw!


    git branch --track style origin/style

    git remote add shared ../hello.git
