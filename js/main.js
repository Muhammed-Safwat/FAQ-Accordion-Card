let x = 1;
function showText( event )
{   
        let h = document.querySelectorAll( ".accordion" );
        for ( let i = 0; i < 5; i++ )
        {
            h[ i ].classList.replace( "open", "close" );
            x = 1;
        }
    if ( x )
    {
        event.target.parentElement.parentElement.classList.replace( "close", "open" );
        x = 0;
    }
    else
    { 
        event.target.parentElement.parentElement.classList.replace( "open", "close" );
        x = 1;
    } 
}

