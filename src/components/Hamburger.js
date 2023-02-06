export default function Hamburger(){
    return (
        <div className="dropdown">
            <span id = "dropdownClick" class="dropdown">
                <ul id = "myDropdown" class="dropdown-list">

                    <li class="neck">  
                        <a id="neck" name="neck" href="#">Neck</a>
                    </li>

                    <li class="shoulders">
                        <a id="shoulders" name="shoulders" href="#">Shoulders</a>
                    </li>

                    <li class="hands">
                        <a id="hands" name="hands" href="#">Hands</a>
                    </li>

                    <li class="back">
                        <a id="back" name="back" href="#">Low Back</a>
                    </li>

                    <li class="hips">
                         <a id="hips" name="hips" href="#">Hips</a>
                    </li>

                    <li class="legs">
                        <a id="legs" name="legs" href="#">Legs</a>
                    </li>

                </ul>
            </span>
        </div>
    )
}