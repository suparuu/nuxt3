<template lang="">
    <div>
        <Head>
            <Title>포트폴리오</Title>
            <Meta name="discription" content="프론트앤드 포트폴리오"/>
            <Link rel="shortcut icon" href="/path/to/favicon.ico"/>
        </Head>
        <header>
            <NuxtLink to="/">HOME</NuxtLink>
            <NuxtLink to="/About">ABOUT</NuxtLink>
            <NuxtLink to="/Work">WORK</NuxtLink>
        </header>
        <slot/>
        <footer></footer>
    </div>
</template>