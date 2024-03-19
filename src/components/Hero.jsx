import React from 'react'
import "../styles.scss"
import vscode from "../images/vscode.png"

export const Hero = () => {
  return (
    <section id='Home'>
    <div className='hero'>
        <div className='editor'>
            <div className='upper'>
                <div className='menu'><img src={vscode} alt=''/>File | Edit | View | Run</div> <div className='symbols'><p>━</p><p>🗖</p><p> ✖</p></div>
            </div>
            <div className='lower'>
                <div className='intro'>
                    <h1 className='small'>I'm</h1>
                    <div className='comment'>
                    <h1 className='big'>Yaswa<span>nth</span><br/> <span className='surname'>Godavarthi</span></h1>
                    <p>//FullStackDev</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
