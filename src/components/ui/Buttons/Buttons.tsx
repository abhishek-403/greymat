import "./Button.css";
type Props = {
  title: string;
  link?: string;
};

export default function PrimaryButton({ title, link }: Props) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-4 text-lg font-semibold  text-white backdrop-blur-3xl">
        {title}
      </span>
    </button>
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

{
  /* <section class="buttons">
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
</section> */
}
