import "./Button.css";
type Props = {
  title: string;
  link?: string;
};

export default function PrimaryButton({ title, link }: Props) {
  return (
    <section className="buttons button-body flex ">
      <div className="container">
        <a href={link?link:'#'} className="btn btn-1">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          {title}
        </a>
      </div>
    </section>
  );
}

export function TerButton({}: Props) {
  return (
      <section className="buttons">
        <div className="container">
          <a href="https://twitter.com/Dave_Conner" className="btn btn-5">
            Hover
          </a>
        </div>
      </section>
  );
}

export function SecondaryButton({}: Props) {
  return (
      <section className="buttons">
        <div className="container">
          <a href="https://twitter.com/Dave_Conner" className="btn btn-3">
            Hover
          </a>
        </div>
      </section>
  );
}


{/* <section class="buttons">
    <h1>Button Hover Effects</h1>
  <div class="container">
    
    <a href="https://twitter.com/Dave_Conner" class="btn btn-1">
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
      </svg>
     Hover
    </a>
    <!--svg hover inspired by https://codepen.io/karimbalaa/pen/qERbBY?editors=110 -->
    <!--End of Button 1 -->
    
    <a href="https://twitter.com/Dave_Conner" class="btn btn-2">Hover</a> 
    <!--End of Button 2 -->
    
    <a href="https://twitter.com/Dave_Conner" class="btn btn-3">Hover</a> 
    <!--End of Button 3 -->
    
    <a href="https://twitter.com/Dave_Conner" class="btn btn-4"><span>Hover</span></a> 
    <!--End of Button 4 -->
    
    <a href="https://twitter.com/Dave_Conner" class="btn btn-5">Hover</a> 
    <!--End of Button 5 -->
    
    
  </div>
  <p>Follow on <a href="https://twitter.com/Dave_Conner" target="_blank">Twitter</a></p>
</section> */}