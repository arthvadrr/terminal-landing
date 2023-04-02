const BashRc = () => {
    return (
        <p>        
        export PATH="$PATH:/usr/sbin:/sbin:/bin:/usr/bin:/etc:/usr/ucb:/usr/local/bin:/usr/local/local_dfs/bin:/usr/bin/X11:/usr/local/sas"<br/>
        export MANPATH="/usr/share/man:/usr/local/man:/usr/local/local_dfs/man"<br/>
        export PAGER=less<br/>
        EDITOR=/usr/bin/vim<br/>
        export EDITOR<br/>
        export HISTFILESIZE=50<br/>
        export TERM=xterm-color<br/>
        unset MAILCHECK<br/>
        tty -s && mesg n<br/>
        alias bye=logout<br/>
        alias h=history<br/>
        alias jobs='jobs -l'<br/>
        alias lf='ls -algF'<br/>
        alias log=logout<br/>
        alias cls=clear<br/>
        alias edit=$EDITOR<br/>
        alias restore=/usr/local/local_dfs/bin/restore<br/>
        shopt -s cdspell<br/>
        shopt -s histappend<br/>
        set -o noclobber<br/>
        </p>
    )
}

export default BashRc;