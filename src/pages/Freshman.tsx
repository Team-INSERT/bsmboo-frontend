import React from 'react';
import Header from '../Components/Header';
import '../Style/Freshman.scss';

const Freshman = () => {
    return (
        <div>
            <Header mode={false} />
            <div className='new-stud-wrap'>
                <span className='new-stud-title'>신입생이신가요?</span>
                <span className='new-stud-subtitle'>BSMBOO는 신입생도 절차를 통해 서비스를 이용할 수 있습니다.</span>
            </div>
            <div className='new-stud-login-wrap'>
                <input type='text' className='new-stud-id' placeholder='임시 아이디를 입력해주세요.' />
                <input type='password' className='new-stud-pw' placeholder='임시 비밀번호를 입력해주세요.' />
                <button className='new-stud-login-btn'>신입생으로 로그인하기</button>
            </div>
            <div className='new-stud-wrap'>
                <span className='new-stud-title'>신입생 계정은 어떻게 발급받나요?</span>
                <span className='new-stud-subtitle'>아래와 같은 절차를 통해 발급받으실 수 있습니다.</span>
            </div>
            <div className='how-new-stud'>
                <span>첫 번째로, 신입생임을 인증할 수단이 필요합니다. 자신의 이름이 나온 합격 사진을 준비해주세요.
                    <br />
                    또는 학교에서 발신한 아무 메세지의 입력칸에 자신의 이름을 적어 캡처한 사진을 준비해주세요.
                    <br />
                    예시 사진은 예를 들기 위한 사진이므로, 신입생이 받은 메시지나 합격 사이트와 다를 수 있습니다.
                </span>
                <span style={{ marginTop: '20px' }}>* 예시사진 *</span>
                <div className='exam-wrap'>
                    <img src='/exam1.jpeg' alt='예시사진1' className='img-one' />
                    <img src='/exam2.jpeg' alt='예시사진2' className='img-two' />
                </div>
                <span>두 번째로, BSMBOO 인스타그램 공식 계정이나 지메일로 아래의 내용을 보내주세요.
                    <br />
                    내용은 인증 사진과 함께 사용할 아이디, 이름, 비밀번호를 같이 보내주셔야합니다.
                    <br />
                    보안을 위해 아이디와 비밀번호는 영문이어야 하며, 비밀번호는 8자리를 넘어야합니다.
                    <br />
                    위 형식 중 하나 이상이 빠져있거나, 사용할 수 없을 경우 아이디를 발급할 수 없습니다.
                    <br />
                    <a href='https://instagram.com/bssm.forest'><b>@bssm.forest</b> 혹은 <b>tshapejunior@gmail.com</b>으로 보내실 수 있습니다.</a>
                    <br />
                    관리자가 확인 후 임시 아이디 발급이 완료되었을 경우, 확인 메일 혹은 DM이 전송됩니다.
                </span>
                <span style={{ marginTop: '20px' }}>* 예시사진 *</span>
                <div className='exam-wrap'>
                    <img src='/exam3.jpeg' alt='예시사진1' className='img-three' />
                    <img src='/exam4.jpeg' alt='예시사진2' className='img-four' />
                </div>
            </div>
        </div>
    );
};

export default Freshman;