-- Bobble script
-- Moves camera when moveDirection > 0 (aka velocity has a length)

local RunService = game:GetService("RunService")

local character = script.Parent
local humanoid = character:WaitForChild("Humanoid")
local humanoidRootPart = character:WaitForChild("HumanoidRootPart")

local Abs, Cos, Sin, Min = math.abs, math.cos, math.sin, math.min

function lerp(a, b, t)
	return (1 - t) * a + t * b
end

function runBobble()
	local currentTime = os.clock()
	local rootVelocity = humanoidRootPart.Velocity
	
	local xSwing = Cos(currentTime * 9) / 5
	local ySwing = Abs(Sin(currentTime * 12)) / 5

	local camOffset = Vector3.new(xSwing, ySwing, 0) * Min(1, rootVelocity.Magnitude / humanoid.WalkSpeed)
	humanoid.CameraOffset = lerp(humanoid.CameraOffset, camOffset, (1 / 5))
end

RunService:BindToRenderStep("CameraBobble", Enum.RenderPriority.Camera.Value - 1, runBobble)
