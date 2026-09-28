import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-80 flex flex-col">

        <h1 className="title-sm text-neutral-900 mb-12">
          회원가입
        </h1>

        <div className="flex flex-col gap-6">

          <div className="flex flex-col gap-2">
            <label className="body-sm text-neutral-900">
              이름
            </label>

            <Input
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="body-sm text-neutral-900">
              이메일
            </label>

            <Input
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="body-sm text-neutral-900">
              비밀번호
            </label>

            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="body-sm text-neutral-900">
              비밀번호 확인
            </label>

            <Input
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

        </div>

        <div className="mt-12">
          <Button text="회원가입" />
        </div>

      </div>
    </div>
  );
}

export default App;