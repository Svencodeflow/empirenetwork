import "../../css/gtalogin.css";

export default function gtalogin() {
    return (
        <div className="gta_login">
            <div class="box">
                <span class="borderLine"></span>
                <form>
                    <h2>
                        Login UCP <span>[ECL]</span>
                    </h2>
                    <div class="inputBox">
                        <input type="text" required="required" />
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div class="inputBox">
                        <input type="password" required="required" />
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div class="links">
                        <a href="#">Forgot Password</a>
                        <a href="#">Signup</a>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
}
