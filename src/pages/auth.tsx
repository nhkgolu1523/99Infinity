import { site } from '../data'
import { Icon } from '../components/icons'

/* ==========================================================================
   AUTH HEADER (back + centred title)
   ========================================================================== */
function AuthHeader({ title, back = '/' }: { title: string; back?: string }) {
  return (
    <header class="au-header">
      <a class="au-header__back" href={back} aria-label="Back">
        <Icon name="chevron-left" size="0.42rem" />
      </a>
      <h1>{title}</h1>
    </header>
  )
}

/* ==========================================================================
   LOGIN
   ========================================================================== */
export function LoginPage() {
  return (
    <div class="au-page">
      <AuthHeader title="Log in" />

      <main class="au-main">
        <img class="au-logo" src={site.brand.logo} alt={site.brand.name} />
        <p class="au-welcome">Welcome back — sign in to continue playing</p>

        <form class="au-form" data-auth-form="login" novalidate>
          <label class="au-group">
            <Icon name="phone" size="0.42rem" class="au-group__icon" />
            <span class="au-group__code">+91</span>
            <input type="tel" name="phone" placeholder="Phone number" autocomplete="tel" inputmode="numeric" maxlength="10" />
          </label>

          <label class="au-group">
            <Icon name="lock" size="0.42rem" class="au-group__icon" />
            <input type="password" name="password" placeholder="Password" autocomplete="current-password" />
            <button class="au-eye" type="button" data-toggle-password aria-label="Show password">
              <Icon name="eye" size="0.384rem" />
            </button>
          </label>

          <div class="au-options">
            <label class="au-check">
              <input type="checkbox" name="remember" checked />
              <span>Remember me</span>
            </label>
            <span class="au-forgot" data-open-dialog="forgot-password">Forgot password?</span>
          </div>

          <button class="au-btn" type="submit">Log in</button>
        </form>

        <p class="au-switch">
          Don't have an account? <a href="/register">Create Account</a>
        </p>
      </main>
    </div>
  )
}

/* ==========================================================================
   REGISTER
   ========================================================================== */
export function RegisterPage() {
  return (
    <div class="au-page">
      <AuthHeader title="Register" />

      <main class="au-main">
        <img class="au-logo" src={site.brand.logo} alt={site.brand.name} />
        <p class="au-welcome">Create an account and claim your welcome bonus</p>

        <form class="au-form" data-auth-form="register" novalidate>
          <label class="au-group">
            <Icon name="phone" size="0.42rem" class="au-group__icon" />
            <span class="au-group__code">+91</span>
            <input type="tel" name="phone" placeholder="Phone number" autocomplete="tel" inputmode="numeric" maxlength="10" />
          </label>

          <label class="au-group">
            <Icon name="lock" size="0.42rem" class="au-group__icon" />
            <input type="password" name="password" placeholder="Create password" autocomplete="new-password" />
            <button class="au-eye" type="button" data-toggle-password aria-label="Show password">
              <Icon name="eye" size="0.384rem" />
            </button>
          </label>

          <label class="au-group">
            <Icon name="lock" size="0.42rem" class="au-group__icon" />
            <input type="password" name="confirm" placeholder="Confirm password" autocomplete="new-password" />
          </label>

          <label class="au-group">
            <Icon name="ticket" size="0.42rem" class="au-group__icon" />
            <input type="text" name="invite" placeholder="Invitation code (optional)" />
          </label>

          <div class="au-terms">
            <input type="checkbox" id="auAgeCheck" name="terms" />
            <label for="auAgeCheck">
              I am 18+ and I agree to the <a href="/account/terms">Terms &amp; Conditions</a>
            </label>
          </div>

          <button class="au-btn" type="submit">Create account</button>
        </form>

        <p class="au-switch">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </main>
    </div>
  )
}

/* ==========================================================================
   FORGOT PASSWORD
   ========================================================================== */
export function ForgotPasswordPage() {
  return (
    <div class="au-page">
      <AuthHeader title="Reset password" back="/login" />

      <main class="au-main">
        <Icon name="lock" size="1.6rem" class="c-main au-reset-ico" />
        <p class="au-welcome">Enter your registered phone number and we will send you a reset code.</p>

        <form class="au-form" data-auth-form="reset" novalidate>
          <label class="au-group">
            <Icon name="phone" size="0.42rem" class="au-group__icon" />
            <span class="au-group__code">+91</span>
            <input type="tel" name="phone" placeholder="Phone number" inputmode="numeric" maxlength="10" />
          </label>

          <label class="au-group">
            <Icon name="shield-check" size="0.42rem" class="au-group__icon" />
            <input type="text" name="code" placeholder="Verification code" inputmode="numeric" />
            <button class="au-send" type="button" data-send-code>
              Send code
            </button>
          </label>

          <button class="au-btn" type="submit">Reset password</button>
        </form>

        <p class="au-switch">
          Remembered it? <a href="/login">Back to log in</a>
        </p>
      </main>
    </div>
  )
}
