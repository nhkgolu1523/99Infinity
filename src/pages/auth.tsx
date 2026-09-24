import { site } from '../data'
import { NavbarInner, CustomerBubble } from '../components/layout'
import { Icon } from '../components/icons'

/* ==========================================================================
   LOGIN
   ========================================================================== */
export function LoginPage() {
  return (
    <>
      <NavbarInner title="Log in" />

      <main class="auth">
        <div class="auth__hero">
          <img class="auth__logo" src={site.brand.logo} alt={site.brand.name} />
          <p class="auth__tagline">Welcome back — sign in to continue playing</p>
        </div>

        <form class="auth__form" data-auth-form="login" novalidate>
          <label class="field">
            <Icon name="phone" class="field__icon" />
            <span class="field__suffix">+91</span>
            <input type="tel" name="phone" placeholder="Phone number" autocomplete="tel" inputmode="numeric" />
          </label>

          <label class="field">
            <Icon name="lock" class="field__icon" />
            <input type="password" name="password" placeholder="Password" autocomplete="current-password" />
            <button class="field__suffix" type="button" data-toggle-password aria-label="Show password">
              <Icon name="eye" size="0.4rem" />
            </button>
          </label>

          <div class="auth__row">
            <label class="checkbox">
              <input type="checkbox" name="remember" checked />
              <span>Remember me</span>
            </label>
            <span class="link-main" data-open-dialog="forgot-password">Forgot password?</span>
          </div>

          <button class="btn-primary auth__submit" type="submit">
            Log in
          </button>
        </form>

        <div class="auth__alt">
          Don't have an account? <a href="/register">Register now</a>
        </div>

        <CustomerBubble />
      </main>
    </>
  )
}

/* ==========================================================================
   REGISTER
   ========================================================================== */
export function RegisterPage() {
  return (
    <>
      <NavbarInner title="Register" />

      <main class="auth">
        <div class="auth__hero">
          <img class="auth__logo" src={site.brand.logo} alt={site.brand.name} />
          <p class="auth__tagline">Create an account and claim your welcome bonus</p>
        </div>

        <form class="auth__form" data-auth-form="register" novalidate>
          <label class="field">
            <Icon name="phone" class="field__icon" />
            <span class="field__suffix">+91</span>
            <input type="tel" name="phone" placeholder="Phone number" autocomplete="tel" inputmode="numeric" />
          </label>

          <label class="field">
            <Icon name="lock" class="field__icon" />
            <input type="password" name="password" placeholder="Create password" autocomplete="new-password" />
            <button class="field__suffix" type="button" data-toggle-password aria-label="Show password">
              <Icon name="eye" size="0.4rem" />
            </button>
          </label>

          <label class="field">
            <Icon name="lock" class="field__icon" />
            <input type="password" name="confirm" placeholder="Confirm password" autocomplete="new-password" />
          </label>

          <label class="field">
            <Icon name="ticket" class="field__icon" />
            <input type="text" name="invite" placeholder="Invitation code (optional)" />
          </label>

          <label class="checkbox">
            <input type="checkbox" name="terms" />
            <span>
              I am 18+ and I agree to the <span class="c-main">Terms &amp; Conditions</span>
            </span>
          </label>

          <button class="btn-primary auth__submit" type="submit">
            Create account
          </button>
        </form>

        <div class="auth__alt">
          Already have an account? <a href="/login">Log in</a>
        </div>

        <CustomerBubble />
      </main>
    </>
  )
}

/* ==========================================================================
   FORGOT PASSWORD
   ========================================================================== */
export function ForgotPasswordPage() {
  return (
    <>
      <NavbarInner title="Reset password" back="/login" />

      <main class="auth">
        <div class="auth__hero">
          <Icon name="lock" size="1.6rem" class="c-main" />
          <p class="auth__tagline">
            Enter your registered phone number and we will send you a reset code.
          </p>
        </div>

        <form class="auth__form" data-auth-form="reset" novalidate>
          <label class="field">
            <Icon name="phone" class="field__icon" />
            <span class="field__suffix">+91</span>
            <input type="tel" name="phone" placeholder="Phone number" inputmode="numeric" />
          </label>

          <label class="field">
            <Icon name="shield-check" class="field__icon" />
            <input type="text" name="code" placeholder="Verification code" inputmode="numeric" />
            <button class="field__suffix" type="button" data-send-code>
              Send code
            </button>
          </label>

          <button class="btn-primary auth__submit" type="submit">
            Reset password
          </button>
        </form>

        <div class="auth__alt">
          Remembered it? <a href="/login">Back to log in</a>
        </div>
      </main>
    </>
  )
}
