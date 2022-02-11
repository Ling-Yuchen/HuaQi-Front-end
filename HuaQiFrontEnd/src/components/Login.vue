<template>
    <div>
        <div>登录</div>
        <span>用户名</span><input id='username'>
        <br>
        <span>密码</span><input id='password'>
        <br>
        <button type="button">
            <router-link to='/register'>注 册</router-link>
        </button>
        <button type="submit">
            <router-link to='/search'>登 录</router-link>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>
